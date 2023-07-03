import { Notification } from '../model/index'
import { rtkApi } from '@/shared/api/api'

const notificationList = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomendationsList: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
})

export const UseArticleRecomendationsList = notificationList.useGetArticleRecomendationsListQuery
