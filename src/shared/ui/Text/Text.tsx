import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  DEFALUT = 'default',
  ERROR = 'error',
  INVERTED = 'inverted'
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}


interface TextProps {
  title?: string
  text?: string
  className?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export type HeaderTagType = 'h1' | 'h2' | 'h3'

const getHeaderSizeByTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
}

export const Text = (props: TextProps) => {
  const {
    title,
    text,
    className,
    align = TextAlign.CENTER,
    theme = TextTheme.DEFALUT,
    size = TextSize.M

  } = props

  const HeaderTag = getHeaderSizeByTag[size]

  const mods: Mods = {
    [cls[align]]: true,
    [cls[theme]]: true,
    [cls[size]]: true
  }

  return (
    <div className={classNames(cls.Title, mods, [className])}>
      {title && <HeaderTag className={classNames(cls.title, {}, [])}>{title}</HeaderTag>}
      {text && <p className={classNames(cls.text, {}, [])}>{text}</p>}
    </div >
  )
}
