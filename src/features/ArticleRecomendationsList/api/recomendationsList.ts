import { Article } from '@/entities/Article'
import { rtkApi } from '@/shared/api/api'

const recomendationsList = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user'
        }
      })
    })
  })
})

export const UseArticleRecomendationsList =
  recomendationsList.useGetArticleRecommendationsListQuery
