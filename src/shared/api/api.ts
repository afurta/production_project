import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/LS_Constants'

export const $api = axios.create({
  baseURL: __API__,
  headers:{
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
  }
})

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
      if (token){
        headers.set('authorization', localStorage.getItem(USER_LOCALSTORAGE_KEY) || '')
      }

      return headers
    },
  }),
  endpoints: () => ({}),
})

