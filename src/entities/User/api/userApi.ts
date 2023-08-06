import { JsonSettings } from '../model/types/JsonSettings'
import { User } from '../model/types/UserSchema'
import { rtkApi } from '@/shared/api/api'

interface SetJsonSettings {
  userId: string
  jsonSettings: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettings>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings
        }
      })
    }),
    getUserById: build.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET'
      })
    })
  })
})

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate

export const getUserByIdQuery = userApi.endpoints.getUserById.initiate
