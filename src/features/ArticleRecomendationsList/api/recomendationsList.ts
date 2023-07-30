import { Article } from '@/entities/Article'
import { rtkApi } from '@/shared/api/api'

const recomendationsList = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const UseArticleRecomendationsList =
  recomendationsList.useGetArticleRecomendationsListQuery
