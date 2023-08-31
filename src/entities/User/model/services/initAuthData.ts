import { ThunkConfig } from '@/app/providers/StoreProvider'
import { User } from '@/entities/User'
import { getUserByIdQuery } from '@/entities/User/api/userApi'
import {
  LOCAL_STORAGE_LAST_DESIGN,
  USER_LOCALSTORAGE_KEY
} from '@/shared/constants/LS_Constants'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initeAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

    if (!userId) return rejectWithValue('Error userId')

    try {
      const response = await dispatch(getUserByIdQuery(userId)).unwrap()

      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN,
        response.features?.isAppRedesigned ? 'new' : 'old'
      )
      return response
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
