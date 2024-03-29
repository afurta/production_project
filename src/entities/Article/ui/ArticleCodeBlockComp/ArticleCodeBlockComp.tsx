import { FC, memo } from 'react'
import { ArticleCodeBlock } from '../../model/types/article'
import { Code } from '@/shared/ui/redesigned/Code'

interface ArticleCodeBlockCompProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComp: FC<ArticleCodeBlockCompProps> = memo(
  (props) => {
    const { block } = props

    return <Code text={block.code} />
  }
)
