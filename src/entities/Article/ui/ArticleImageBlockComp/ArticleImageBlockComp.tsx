import { memo } from 'react'
import cls from './ArticleImageBlockComp.module.scss'
import { classNames } from '@/shared/lib/classNames/classnames'
import { Text } from '@/shared/ui/Text'
import { TextAlign } from '@/shared/ui/Text'
import { ArticleImageBlock } from '../../model/types/article'

interface ArticleImageBlockCompProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComp = memo((props: ArticleImageBlockCompProps) => {
  const { className, block } = props

  return (
    <div className={classNames(cls.articleImageBlockComp, {}, [className])}>
      <img src={block.src} className={classNames(cls.img)} />
      {block.title && <Text title={block.title} align={TextAlign.CENTER} />}
    </div>
  )
})
