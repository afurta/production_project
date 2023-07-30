import { FC, HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '@/shared/assets'
import { getArticleDetailsRoute } from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { Text, TextAlign } from '@/shared/ui/Text'
import cls from './ArticleListItem.module.scss'
import { ArticleBlockType, ArticleView } from '../../model/consts'
import { Article, ArticleTextBlock } from '../../model/types/article'
import { ArticleTextBlockComp } from '../../ui/ArticleTextBlockComp/ArticleTextBlockComp'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view = ArticleView.GRID, target } = props

  const { t } = useTranslation()

  const types = (
    <Text
      text={!!article.type && article.type.join(',')}
      className={classNames(cls.types)}
      align={TextAlign.LEFT}
    />
  )

  const views = (
    <>
      <Text text={String(article.views)} className={classNames(cls.views)} />
      <Icon Icon={ICONS.Eye} />
    </>
  )

  if (view === ArticleView.LIST) {
    const textBlocks = article.blocks.find(
      (elem) => elem.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
        data-testid="ArticleListItem"
      >
        <Card className={cls.card}>
          <div className={classNames(cls.header)}>
            <Avatar
              className={classNames(cls.avatar)}
              src={article.user.avatar}
              size={30}
              data-testid="ArticleListItemAvatar"
            />
            <Text
              text={article.user.userName}
              className={classNames(cls.username)}
              data-testid="ArticleListItemUserName"
            />
            <Text
              text={article.createdAt}
              className={classNames(cls.date)}
              data-testid="ArticleListItemDate"
            />
          </div>
          <Text
            text={article.title}
            className={classNames(cls.title)}
            align={TextAlign.LEFT}
          />
          {types}
          <AppImage
            src={article.img}
            alt={article.title}
            className={classNames(cls.img)}
            fallback={<Skeleton width={'100%'} height={'250'} />}
            errorFallback={<Skeleton width={'100%'} height={250} />}
            data-testid="ArticleListItemImg"
          />
          {textBlocks && (
            <ArticleTextBlockComp
              block={textBlocks}
              className={classNames(cls.textBlock)}
              data-testid="ArticleListItemTextBlock"
            />
          )}
          <div className={classNames(cls.footer)}>
            <AppLink to={getArticleDetailsRoute(article.id)} target={target}>
              <Button
                theme={ButtonTheme.OUTLINE}
                data-testid="ArticleListItemMoreBtn"
              >
                {t('Читать далее...')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      to={getArticleDetailsRoute(article.id)}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      target={target}
      data-testid="ArticleListItem"
    >
      <Card className={cls.card}>
        <div className={classNames(cls.card)}>
          <div className={classNames(cls.imageWrapper)}>
            {/* <img src={article.img} alt={article.title} className={classNames(cls.img)} /> */}
            <AppImage
              src={article.img}
              alt={article.title}
              className={classNames(cls.img)}
              fallback={<Skeleton width={200} height={200} />}
              errorFallback={<Skeleton width={200} height={200} />}
            />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={classNames(cls.infoWrapper)}>
            {types}
            {views}
          </div>
          <Text
            text={article.title}
            className={classNames(cls.title)}
            align={TextAlign.LEFT}
          />
        </div>
      </Card>
    </AppLink>
  )
}
