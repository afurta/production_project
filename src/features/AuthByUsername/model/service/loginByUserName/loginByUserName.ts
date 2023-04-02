import { USER_LOCALSTORAGE_KEY } from './../../../../../shared/constants/LS_Constants'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, UserActions } from 'entities/User'

interface LoginByUserNameProps{
  username:string
  password:string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue: string}>(
  'login/byUserName',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)
      if (!response.data) throw new Error()
      
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkApi.dispatch(UserActions.setAuthData(response.data))
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue('error')
    }
  })
