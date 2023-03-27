import { UserSchema } from './../types/UserSchema'
import { createSlice } from '@reduxjs/toolkit'

const initialState:UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const { actions: UserActions } = userSlice
export const { reducer: UserReducer } = userSlice
