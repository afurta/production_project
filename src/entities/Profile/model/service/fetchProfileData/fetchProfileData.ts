import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from 'entities/Profile/model/types/ProfileSchema'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile',
  async (_, thunkApi) => {

    const {extra, rejectWithValue} = thunkApi
    
    try {
      const response = await extra.api.get<Profile>('/profile')
      if (!response.data) throw new Error()
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  })

