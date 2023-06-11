import { ArticleTextBlockComp } from 'entities/Article/ui/ArticleTextBlockComp/ArticleTextBlockComp'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ICONS } from 'shared/assets'
import { RoutePath } from 'shared/config/routeConfig/RouterConfig'
import { classNames } from 'shared/lib/classNames/classnames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const {
    className,
    article,
    view = ArticleView.GRID
  } = props

  const { t } = useTranslation()
  const navigate = useNavigate()

  const types = <Text text={article.type.join(',')} className={classNames(cls.types)} align={TextAlign.LEFT} />

  const views = (
    <>
      <Text text={String(article.views)} className={classNames(cls.views)} />
      <Icon Icon={ICONS.Eye} />
    </>
  )

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [article.id, navigate])

  if (view === ArticleView.LIST) {
    const textBlocks = article.blocks.find(elem => elem.type === ArticleBlockType.TEXT) as ArticleTextBlock

    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={classNames(cls.header)}>
            <Avatar className={classNames(cls.avatar)} src={article.user.avatar} size={30} />
            <Text text={article.user.userName} className={classNames(cls.username)} />
            <Text text={article.createdAt} className={classNames(cls.date)} />
          </div>
          <Text text={article.title} className={classNames(cls.title)} align={TextAlign.LEFT} />
          {types}
          <img src={article.img} alt={article.title} className={classNames(cls.img)} />
          {textBlocks && <ArticleTextBlockComp block={textBlocks} className={classNames(cls.textBlock)} />}
          <div className={classNames(cls.footer)}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>{t('Читать далее...')}</Button>
            {views}
          </div>
        </Card >
      </div >
    )
  }

  return (
    <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card} onClick={onOpenArticle}>
        <div className={classNames(cls.card)}>
          <div className={classNames(cls.imageWrapper)}>
            <img src={article.img} alt={article.title} className={classNames(cls.img)} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={classNames(cls.infoWrapper)}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={classNames(cls.title)} align={TextAlign.LEFT} />
        </div>
      </Card>
    </div >
  )
}
