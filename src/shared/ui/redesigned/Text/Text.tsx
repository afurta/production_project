import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export type TextVariant = 'primary' | 'error' | 'accent'

export type TextAlign = 'left' | 'right' | 'center'

export type TextSize = 's' | 'm' | 'l'

interface TextProps {
  title?: string
  text?: string
  className?: string
  variant?: TextVariant
  align?: TextAlign
  size?: TextSize
  bold?: boolean
}

export type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToClass: Record<TextSize, string> = {
  s: cls.size_s,
  m: cls.size_m,
  l: cls.size_l
}

const getHeaderSizeByTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1'
}

export const Text = (props: TextProps) => {
  const {
    title,
    text,
    className,
    align = 'left',
    variant = 'primary',
    size = 'm',
    bold
  } = props

  const HeaderTag = getHeaderSizeByTag[size]
  const sizeToClass = mapSizeToClass[size]

  const additionalClasses = [cls[align], cls[variant], sizeToClass, className]

  return (
    <div
      className={classNames(cls.Title, { [cls.bold]: bold }, additionalClasses)}
    >
      {title && (
        <HeaderTag className={classNames(cls.title, {}, [])}>{title}</HeaderTag>
      )}
      {text && <p className={classNames(cls.text, {}, [])}>{text}</p>}
    </div>
  )
}
