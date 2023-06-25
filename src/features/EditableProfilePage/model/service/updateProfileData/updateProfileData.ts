import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from 'entities/ProfileCard/model/types/Profile'
import { getProfileForm } from 'features/EditableProfilePage/model/selectors/getProfileForm/getProfileForm'
import { validateProfileData } from 'features/EditableProfilePage/model/service/validateProfileData/validateProfileData'
import { ValidateProfileError } from 'features/EditableProfilePage/model/types/ProfileSchema'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {

    const {extra, rejectWithValue, getState} = thunkApi

    const formData = getProfileForm(getState())
    
    const errors = validateProfileData(formData)
    if (errors.length) return rejectWithValue(errors)

    try {
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData )
      if (!response.data) throw new Error()
      return response.data
    } catch (error) {
      return rejectWithValue([ValidateProfileError.INCORRECT_DATA])
    }
  })

