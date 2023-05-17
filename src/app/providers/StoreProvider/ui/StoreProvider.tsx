import { ReducersMapObject } from '@reduxjs/toolkit'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children?: ReactNode
  initialStore?: DeepPartial<StoreSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
}

export const StoreProvider = ({ children, initialStore, asyncReducers }: StoreProviderProps) => {
  const navigate = useNavigate()

  const store = createReduxStore(
    initialStore as StoreSchema,
    asyncReducers as ReducersMapObject<StoreSchema>,
    navigate
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
