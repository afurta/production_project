import { USER_LOCALSTORAGE_KEY } from './../../../../../shared/constants/LS_Constants'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { User, UserActions } from '@/entities/User'

interface LoginByUserNameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  ThunkConfig<string>
>('login/byUserName', async (authData, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi

  try {
    const response = await extra.api.post<User>('/login', authData)
    if (!response.data) throw new Error()

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    dispatch(UserActions.setAuthData(response.data))
    return response.data
  } catch (error) {
    return rejectWithValue('error')
  }
})
