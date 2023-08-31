import { User, UserSchema } from './../types/UserSchema'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  LOCAL_STORAGE_LAST_DESIGN,
  USER_LOCALSTORAGE_KEY
} from '@/shared/constants/LS_Constants'
import { setFeatureFlag } from '@/shared/lib/features'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { JsonSettings } from '../types/JsonSettings'
import { initAuthData } from '../services/initAuthData'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload
      setFeatureFlag(payload.features)
      localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.id)
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN,
        payload.features?.isAppRedesigned ? 'new' : 'old '
      )
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = payload
        }
      }
    )
    builder.addCase(
      initAuthData.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.authData = payload
        setFeatureFlag(payload.features)
        state._inited = true
      }
    )
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true
    })
  }
})

export const { actions: UserActions } = userSlice
export const { reducer: UserReducer } = userSlice
