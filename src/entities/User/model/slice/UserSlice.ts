import { User, UserSchema } from './../types/UserSchema'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/LS_Constants'
import { setFeatureFlag } from '@/shared/lib/features'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      setFeatureFlag(action.payload.features)
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      state._inited = true
      if (user) {
        const json = JSON.parse(user) as User
        state.authData = json
        setFeatureFlag(json.features)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  }
})

export const { actions: UserActions } = userSlice
export const { reducer: UserReducer } = userSlice
