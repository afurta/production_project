import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StoreSchemaKey } from 'app/providers/StoreProvider/config/StoreSchema'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StoreSchemaKey]?: Reducer
}


// export type ReducerList = {
//   [name in StoreSchemaKey]?: Reducer<NonNullable<StoreSchema[name]>>
// }

interface DynamicModuleLoaderProps {
  reducers: ReducerList
  isRemoveAfterUnmount?: boolean
  children: ReactNode
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { reducers, children, isRemoveAfterUnmount = true } = props

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StoreSchemaKey]
      if (!mounted) {
        store.reducerManager.add(name as StoreSchemaKey, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })

    return () => {
      if (isRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StoreSchemaKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {children}
    </>
  )
}

