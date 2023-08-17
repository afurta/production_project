import { memo } from 'react'
import cls from './ArticleImageBlockComp.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { TextAlign } from '@/shared/ui/deprecated/Text'
import { ArticleImageBlock } from '../../model/types/article'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeature } from '@/shared/lib/features'

interface ArticleImageBlockCompProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComp = memo(
  (props: ArticleImageBlockCompProps) => {
    const { className, block } = props

    return (
      <div className={classNames(cls.articleImageBlockComp, {}, [className])}>
        <img src={block.src} className={classNames(cls.img)} />
        {block.title && (
          <ToggleFeature
            feature="isAppRedesigned"
            on={
              <Text
                className={classNames(cls.paragraph)}
                align={TextAlign.LEFT}
              />
            }
            off={
              <TextDeprecated title={block.title} align={TextAlign.CENTER} />
            }
          />
        )}
      </div>
    )
  }
)
