import { Rating } from '@/entities/RatingCard'
import { rtkApi } from '@/shared/api/api'

interface ArticleRating{
  userId:string
  articleId:string
}

interface ArticleRatingFetch{
  userId:string
  articleId:string
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], ArticleRating>({
      query: ({userId, articleId}) => ({
        url: '/article-ratings',
        params:{
          userId,
          articleId
        }
      }),
    }),
    sendArticleRating: build.mutation<void, ArticleRatingFetch>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg
      }),
    }),
  }),
})

export const UseGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const UseSendArticleRating = articleRatingApi.useSendArticleRatingMutation
