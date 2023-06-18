import { ArticleDetailsCommentSchema } from '../../model/types/ArticleDetailsCommentSchema'
import { ArticleDetailsRecomendationsSchema } from '../../model/types/ArticleDetailsRecomendationsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema
  recomendations: ArticleDetailsRecomendationsSchema
}
