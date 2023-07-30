import { createSlice } from '@reduxjs/toolkit'
import { loginByUserName } from '../service/loginByUserName/loginByUserName'
import { AuthSchema } from '../types/AuthSchema'

const initialState: AuthSchema = {
  username: '',
  password: '',
  error: '',
  isLoading: false
}

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUserName.pending, (state) => {
      (state.isLoading = true), (state.error = undefined)
    }),
      builder.addCase(loginByUserName.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload)
      }),
      builder.addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false
      })
  }
})

export const { actions: AuthActions } = AuthSlice
export const { reducer: AuthReducer } = AuthSlice
