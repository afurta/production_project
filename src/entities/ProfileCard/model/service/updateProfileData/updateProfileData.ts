import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from 'entities/ProfileCard/model/selectors/getProfileForm/getProfileForm'
import { Profile } from 'entities/ProfileCard/model/types/ProfileSchema'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi,) => {

    const {extra, rejectWithValue, getState} = thunkApi

    const formData = getProfileForm(getState())

    try {
      const response = await extra.api.put<Profile>('/profile', formData )
      if (!response.data) throw new Error()
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  })

