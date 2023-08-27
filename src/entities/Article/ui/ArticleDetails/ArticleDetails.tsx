import { ICONS } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import {
  TextAlign,
  Text as TextDeprecated,
  TextSize
} from '@/shared/ui/deprecated/Text'
import { FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice'
import cls from './ArticleDetails.module.scss'

import { ToggleFeature, toggleFeature } from '@/shared/lib/features'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from '../../model/selectors/getArticleDetailsData'
import { renderBlocks } from './renderBlock'

interface ArticleDetailsProps {
  className?: string
  id?: string
}

const initialReducers: ReducerList = {
  ArticleDetails: ArticleDetailsReducer
}

const articleDetailsSkeletons = () => {
  const Skeleton = toggleFeature({
    name: 'isAppRedesigned',
    on: () => SkeletonDeprecated,
    off: () => SkeletonRedesigned
  })

  return (
    <VStack gap={16}>
      <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
      <Skeleton className={cls.title} width={300} height={32} />
      <Skeleton className={cls.skeleton} width="100%" height={24} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
    </VStack>
  )
}

const Deprecated = () => {
  const data = useSelector(getArticleDetailsData)
  return (
    <>
      <HStack align="center" justify="center">
        <Avatar
          alt="avatar"
          src={data?.img}
          size={200}
          className={cls.avatar}
        />
      </HStack>
      <VStack gap={4} data-testid="ArticleDetails.Info">
        <TextDeprecated
          title={data?.title}
          text={data?.subtitle}
          className={classNames(cls.title)}
          align={TextAlign.LEFT}
          size={TextSize.L}
        />
        <HStack align={'start'} justify={'start'} gap={8}>
          <IconDeprecated Svg={ICONS.Eye} className={classNames(cls.icon)} />
          <TextDeprecated text={String(data?.views)} />
        </HStack>
        <HStack align={'start'} justify={'start'} gap={8}>
          <IconDeprecated
            Svg={ICONS.Calendar}
            className={classNames(cls.icon)}
          />
          <TextDeprecated text={String(data?.createdAt)} />
        </HStack>
      </VStack>
      <div className={classNames(cls.articleBlocks)}>
        {data?.blocks.map(renderBlocks)}
      </div>
    </>
  )
}

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData)
  return (
    <>
      <Text title={article?.title} size="l" bold align="left" />
      <Text title={article?.subtitle} align="left" />
      <AppImage
        fallback={
          <SkeletonRedesigned width="100%" height={420} border="16px" />
        }
        src={article?.img}
        className={cls.img}
      />
      {article?.blocks.map(renderBlocks)}
    </>
  )
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { className, id } = props
  const { t } = useTranslation()

  const dispatch = useAppDispatch()
  const articleDetailsError = useSelector(getArticleDetailsError)
  const articleDetailsIsLoading = useSelector(getArticleDetailsLoading)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (articleDetailsIsLoading) {
    content = articleDetailsSkeletons()
  } else if (articleDetailsError) {
    content = <Text text="articleDetailsIsLoading" variant="error" />
  } else {
    content = (
      <ToggleFeature
        feature="isAppRedesigned"
        on={<Redesigned />}
        off={<Deprecated />}
      />
    )
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount>
      <VStack
        className={classNames(cls.ArticleDetails, {}, [className])}
        gap={16}
        max
        align="start"
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})
