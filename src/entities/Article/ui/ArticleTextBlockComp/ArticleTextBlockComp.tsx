import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './ArticleTextBlockComp.module.scss'
import { ArticleTextBlock } from '../../model/types/article'
import { Text, TextAlign } from 'shared/ui/Text/Text'

interface ArticleTextBlockCompProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComp = (props: ArticleTextBlockCompProps) => {
  const { className, block } = props

  return (
    <div className={classNames(cls.articleTextBlockComp, {}, [className])}>
      {block.title && (
        <Text
          title={block.title}
          className={classNames(cls.title)}
          align={TextAlign.LEFT}
        />
      )}
      {block.paragraphs.map(p => (
        <Text
          text={p}
          className={classNames(cls.paragraph)}
          align={TextAlign.LEFT}
          key={p}
        />
      ))}
    </div>
  )
}
