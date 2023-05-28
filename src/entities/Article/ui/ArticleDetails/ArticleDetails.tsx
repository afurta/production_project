import { FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import { classNames } from 'shared/lib/classNames/classnames'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from 'entities/Article/model/selectors/getArticleDetailsData'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { ICONS } from 'shared/assets'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from 'entities/Article'
import { ArticleCodeBlockComp } from '../ArticleCodeBlockComp/ArticleCodeBlockComp'
import { ArticleImageBlockComp } from '../ArticleImageBlockComp/ArticleImageBlockComp'
import { ArticleTextBlockComp } from '../ArticleTextBlockComp/ArticleTextBlockComp'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const initialReducers: ReducerList = {
  'articleDetails': ArticleDetailsReducer
}
export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { className, id } = props
  const { t } = useTranslation()

  const dispatch = useAppDispatch()
  const data = useSelector(getArticleDetailsData)
  const articleDetailsError = useSelector(getArticleDetailsError)
  const articleDetailsIsLoading = useSelector(getArticleDetailsLoading)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  const renderBlocks = useCallback((elem: ArticleBlock) => {
    switch (elem.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComp block={elem} key={elem.id} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComp block={elem} key={elem.id} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComp block={elem} key={elem.id} />
    }
  }, [])

  if (articleDetailsIsLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width="100%" height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (articleDetailsError) {
    content = <Text text='articleDetailsIsLoading' theme={TextTheme.ERROR} />
  } else {
    content = (
      <>
        <div className={classNames(cls.avatarWrapper)}>
          <Avatar alt="avatar" src={data?.img} size={200} className={cls.avatar} />
        </div>
        <Text title={data?.title} text={data?.subtitle} className={classNames(cls.title)} align={TextAlign.LEFT} size={TextSize.L} />
        <div className={classNames(cls.articleInfo)}>
          <Icon Icon={ICONS.Eye} className={classNames(cls.icon)} />
          <Text text={String(data?.views)} />
        </div>
        <div className={classNames(cls.articleInfo)}>
          <Icon Icon={ICONS.Calendar} className={classNames(cls.icon)} />
          <Text text={String(data?.createdAt)} />
        </div>
        <div className={classNames(cls.articleBlocks)}>
          {data?.blocks.map(renderBlocks)}
        </div>
      </>
    )
  }


  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader >

  )
})
