export { fetchRecomendationArticle } from './model/service/fetchRecomendationArticle/fetchRecomendationArticle'

export type { ArticleDetailsPageSchema } from './model/types/index'
export { ArticleDetailsPageRecomendationsReducer } from './model/slice/ArticleDetailsRecomendations'

export type { ArticleDetailsRecomendationsSchema } from './model/types/ArticleDetailsRecomendationsSchema'
export type { ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema'

export { ArticleDetailsPageAsync as ArticleDetailsPage} from './ui/ArticleDetailsPage/ArticleDetailsPage.async'
