import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classnames'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('articlespage')

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      {t('Статьи')}
    </div>
  )
}

export default memo(ArticlesPage)
