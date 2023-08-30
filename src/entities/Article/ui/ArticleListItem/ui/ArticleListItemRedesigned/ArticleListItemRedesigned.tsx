import { ArticleBlockType, ArticleView } from '@/entities/Article/model/consts'
import { ArticleTextBlock } from '@/entities/Article/model/types/article'
import { ICONS } from '@/shared/assets'
import { getArticleDetailsRoute } from '@/shared/constants/router'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { useTranslation } from 'react-i18next'
import { ArticleListItemProps } from '../../ArticleListItem'
import cls from './ArticleListItemRedesigned.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export const ArticleListItemRedesigned = (props: ArticleListItemProps) => {
  const { className, article, view = ArticleView.GRID, target } = props

  const { t } = useTranslation()

  const types = <Text text={!!article.type && article.type.join(',')} />

  const userInfo = (
    <>
      <Avatar size={32} src={article.user.avatar} />
      <Text bold text={article.user.username} />
    </>
  )

  const views = (
    <HStack gap={8}>
      <Text text={String(article.views)} />
      <Icon Svg={ICONS.Eye} />
    </HStack>
  )

  if (view === ArticleView.LIST) {
    const textBlocks = article.blocks.find(
      (elem) => elem.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

    return (
      <Card padding={24} max data-testid="ArticleListItem">
        <VStack gap={16} max align="start">
          <HStack gap={8} max>
            {userInfo}
            <Text text={article.createdAt} />
          </HStack>
          <Text title={article.title} bold />
          <Text title={article.subtitle} size="s" />
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlocks?.paragraphs && (
            <Text text={textBlocks.paragraphs.slice(0, 2).join(' ')} />
          )}
          <HStack max justify="between">
            <AppLink target={target} to={getArticleDetailsRoute(article.id)}>
              <Button variant="outline">{t('Читать далее...')}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    )
  }

  return (
    <AppLink
      to={getArticleDetailsRoute(article.id)}
      target={target}
      data-testid="ArticleListItem"
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card} border="partial" padding={0}>
        <AppImage
          fallback={<Skeleton width={200} height={200} />}
          alt={article.title}
          src={article.img}
          className={cls.img}
        />
        <VStack className={cls.info} gap={4}>
          <Text title={article.title} className={cls.title} />
          <VStack gap={4} className={cls.footer} max>
            <HStack justify="between" max>
              <Text text={article.createdAt} className={cls.date} />
              {views}
            </HStack>
            <HStack gap={4} justify="start" max>
              {userInfo}
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  )
}
