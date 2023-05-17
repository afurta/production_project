import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StoreSchemaKey } from 'app/providers/StoreProvider/config/StoreSchema'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StoreSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducerList
  isRemoveAfterUnmount?: boolean
}

type ReducerListEntry = [StoreSchemaKey, Reducer]

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { reducers, children, isRemoveAfterUnmount } = props

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StoreSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (isRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          dispatch({ type: `@REMOVE ${name as StoreSchemaKey} reducer` })
          store.reducerManager.remove(name as StoreSchemaKey)
        })

      }
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}

