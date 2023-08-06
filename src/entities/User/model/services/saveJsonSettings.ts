import { ThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setJsonSettingsMutation } from '../../api/userApi'
import { getJsonSettings } from '../../model/selectors/getJsonSettings'
import { getUserAuthData } from '../../model/selectors/getUserAuthData/getUserAuthData'
import { JsonSettings } from '../../model/types/JsonSettings'

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi

  const userData = getUserAuthData(getState())
  const currentSettings = getJsonSettings(getState())

  if (!userData) return rejectWithValue('Error userData saveJsonSettings')

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData?.id,
        jsonSettings: {
          ...currentSettings,
          ...newJsonSettings
        }
      })
    ).unwrap()

    if (!response.jsonSettings) return rejectWithValue('Error saveJsonSettings')

    return response.jsonSettings
  } catch (error) {
    return rejectWithValue('error')
  }
})
