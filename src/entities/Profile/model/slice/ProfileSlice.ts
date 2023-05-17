import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from 'entities/Profile/model/service/fetchProfileData/fetchProfileData'
import { Profile, ProfileSchema } from 'entities/Profile/model/types/ProfileSchema'

const initialState:ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
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
      state.isLoading = false
    })
  },
})

export const { actions: ProfileActions } = ProfileSlice
export const { reducer: ProfileReducer } = ProfileSlice
