import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { ArticleDetails } from 'entities/Article'
import cls from './ArticleDetailsPage.module.scss'
import { useParams } from 'react-router-dom'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { t } = useTranslation('article_details')
  const { className } = props
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Text text={t('Статья не найдена')} theme={TextTheme.ERROR} />
  }

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailsPage)
