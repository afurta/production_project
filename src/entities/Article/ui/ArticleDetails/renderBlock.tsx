import { ArticleBlockType } from '../../model/consts'
import { ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComp } from '../ArticleCodeBlockComp/ArticleCodeBlockComp'
import { ArticleImageBlockComp } from '../ArticleImageBlockComp/ArticleImageBlockComp'
import { ArticleTextBlockComp } from '../ArticleTextBlockComp/ArticleTextBlockComp'

export const renderBlocks = (elem: ArticleBlock) => {
  switch (elem.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComp block={elem} key={elem.id} />
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComp block={elem} key={elem.id} />
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComp block={elem} key={elem.id} />
  }
}
