import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from '../../model/service/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData'
import { Profile, ProfileSchema } from '../types/ProfileSchema'

const initialState:ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action:PayloadAction<Profile>)=>{
      state.form = {
        ...state.form,
        ...action.payload
      }
    },
    cancelEdit: (state) =>{
      state.readonly = true
      state.validateErrors = undefined
      state.form = state.data
    },
    setReadonly: (state, action:PayloadAction<boolean>)=>{
      state.readonly = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true,
      state.error = undefined
    }),
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false,
      state.error = action.payload
    }),
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
      state.form = action.payload
      state.isLoading = false
    }),
    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true,
      state.validateErrors = undefined
    }),
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false,
      state.validateErrors = action.payload
    }),
    builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isLoading = false
      state.data = action.payload
      state.form = action.payload
      state.readonly = true
      state.validateErrors = undefined
    })
  },
})

export const { actions: ProfileActions } = ProfileSlice
export const { reducer: ProfileReducer } = ProfileSlice
