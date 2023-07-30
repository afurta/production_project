import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Profile } from '@/entities/ProfileCard/model/types/Profile'

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile', async (profileId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  try {
    const response = await extra.api.get<Profile>(`/profile/${profileId}`)
    if (!response.data) throw new Error()
    return response.data
  } catch (error) {
    return rejectWithValue('error')
  }
})
