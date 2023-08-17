import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComp.module.scss'
import { ArticleTextBlock } from '../../model/types/article'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text'
import { ToggleFeature } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleTextBlockCompProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComp = (props: ArticleTextBlockCompProps) => {
  const { className, block } = props

  return (
    <div className={classNames(cls.articleTextBlockComp, {}, [className])}>
      {block.title && (
        <ToggleFeature
          feature="isAppRedesigned"
          on={
            <Text
              title={block.title}
              className={classNames(cls.title)}
              align={TextAlign.LEFT}
            />
          }
          off={
            <TextDeprecated
              title={block.title}
              className={classNames(cls.title)}
              align={TextAlign.LEFT}
            />
          }
        />
      )}
      {block.paragraphs.map((p) => (
        <ToggleFeature
          feature="isAppRedesigned"
          on={
            <Text
              text={p}
              className={classNames(cls.paragraph)}
              align={TextAlign.LEFT}
              key={p}
            />
          }
          off={
            <TextDeprecated
              text={p}
              className={classNames(cls.paragraph)}
              align={TextAlign.LEFT}
              key={p}
            />
          }
        />
      ))}
    </div>
  )
}
