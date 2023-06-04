import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { ArticleDetails } from 'entities/Article'
import cls from './ArticleDetailsPage.module.scss'
import { useParams } from 'react-router-dom'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { TextAlign } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticleDetailsCommentReducer, getCommentsSelectors } from './../model/slice/ArticleDetailsCommentSlice'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentError, getArticleDetailsCommentLoading } from '../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchCommentsArticleById } from 'pages/ArticleDetailsPage/model/service/commentsArticleById/commentsArticleById'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'

interface ArticleDetailsPageProps {
  className?: string
}

const initialReducers: ReducerList = {
  ArticleDetailsComment: ArticleDetailsCommentReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { t } = useTranslation('article_details')
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const comments = useSelector(getCommentsSelectors.selectAll)
  const isLoading = useSelector(getArticleDetailsCommentLoading)
  const error = useSelector(getArticleDetailsCommentError)

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id))
  })

  if (!id) {
    return <Text text={t('Статья не найдена')} theme={TextTheme.ERROR} />
  }
  if (error) {
    return <Text text={t('Ошибка')} theme={TextTheme.ERROR} />
  }

  console.log(comments)
  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount>
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={'Комментарии'} align={TextAlign.LEFT} />
        <CommentList data={comments} isLoading={!!isLoading} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
