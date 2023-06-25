import { rtkApi } from 'shared/api/api'

const recomendationsList = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomendationsList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        }
      }),
    }),
  }),
})

export const UseArticleRecomendationsList = recomendationsList.useGetArticleRecomendationsListQuery

