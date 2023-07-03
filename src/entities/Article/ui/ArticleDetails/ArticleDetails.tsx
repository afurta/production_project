import { FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import { classNames } from '@/shared/lib/classNames/classnames'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/Text'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { ICONS } from '@/shared/assets'
import { Icon } from '@/shared/ui/Icon/Icon'

import { ArticleCodeBlockComp } from '../ArticleCodeBlockComp/ArticleCodeBlockComp'
import { ArticleImageBlockComp } from '../ArticleImageBlockComp/ArticleImageBlockComp'
import { ArticleTextBlockComp } from '../ArticleTextBlockComp/ArticleTextBlockComp'
import { HStack, VStack } from '@/shared/ui/Stack'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from '../../model/selectors/getArticleDetailsData'
import { ArticleBlockType } from '../../model/consts'
import { ArticleBlock } from '../../model/types/article'

interface ArticleDetailsProps {
  className?: string
  id?: string
}

const initialReducers: ReducerList = {
  'ArticleDetails': ArticleDetailsReducer
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
        <HStack align='center'>
          <Avatar alt="avatar" src={data?.img} size={200} className={cls.avatar} />
        </HStack>
        <VStack gap={4}>
          <Text title={data?.title} text={data?.subtitle} className={classNames(cls.title)} align={TextAlign.LEFT} size={TextSize.L} />
          <HStack align={'start'} justify={'start'} gap={8}>
            <Icon Icon={ICONS.Eye} className={classNames(cls.icon)} />
            <Text text={String(data?.views)} />
          </HStack>
          <HStack align={'start'} justify={'start'} gap={8}>
            <Icon Icon={ICONS.Calendar} className={classNames(cls.icon)} />
            <Text text={String(data?.createdAt)} />
          </HStack>
        </VStack>
        <div className={classNames(cls.articleBlocks)}>
          {data?.blocks.map(renderBlocks)}
        </div>
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount>
      <VStack className={classNames(cls.ArticleDetails, {}, [className])} gap={16}>
        {content}
      </VStack>
    </DynamicModuleLoader >

  )
})
