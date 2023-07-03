import { ArticleBlockType, ArticleType } from '@/entities/Article'
import { User } from '@/entities/User'

interface ArticleCommonTypes{
  id: string
  type: ArticleBlockType
}

export interface ArticleImageBlock extends ArticleCommonTypes{
  src:string
  title: string
  type: ArticleBlockType.IMAGE
}

export interface ArticleCodeBlock extends ArticleCommonTypes{
  code:string
  type: ArticleBlockType.CODE
}

export interface ArticleTextBlock extends ArticleCommonTypes{
  title?: string
  paragraphs: string[]
  type: ArticleBlockType.TEXT
}

export type ArticleBlock = ArticleImageBlock | ArticleCodeBlock | ArticleTextBlock

export interface Article{
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  user: User
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
