import { FC, HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from 'shared/assets'
import { RoutePath } from 'shared/config/routeConfig/RouterConfig'
import { classNames } from 'shared/lib/classNames/classnames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import cls from './ArticleListItem.module.scss'
import { ArticleBlockType, ArticleView } from '../../model/consts'
import { Article, ArticleTextBlock } from '../../model/types/article'
import { ArticleTextBlockComp } from '../../ui/ArticleTextBlockComp/ArticleTextBlockComp'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const {
    className,
    article,
    view = ArticleView.GRID,
    target
  } = props

  const { t } = useTranslation()

  const types = <Text text={article.type.join(',')} className={classNames(cls.types)} align={TextAlign.LEFT} />

  const views = (
    <>
      <Text text={String(article.views)} className={classNames(cls.views)} />
      <Icon Icon={ICONS.Eye} />
    </>
  )

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
            <AppLink to={RoutePath.article_details + article.id} target={target}>
              <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее...')}</Button>
            </AppLink>
            {views}
          </div>
        </Card >
      </div >
    )
  }

  return (
    <AppLink
      to={RoutePath.article_details + article.id}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      target={target}
    >
      <Card className={cls.card}>
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
    </AppLink >
  )
}
