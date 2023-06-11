import { Mods, classNames } from 'shared/lib/classNames/classnames'
import cls from './Text.module.scss'

export enum TextTheme {
  DEFALUT = 'default',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export enum TextSize {
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
export const Text = (props: TextProps) => {
  const {
    title,
    text,
    className,
    align = TextAlign.CENTER,
    theme = TextTheme.DEFALUT,
    size = TextSize.M
  } = props

  const mods: Mods = {
    [cls[align]]: true,
    [cls[theme]]: true,
    [cls[size]]: true
  }

  return (
    <div className={classNames(cls.Title, mods, [cls[theme], className])}>
      {title && <p className={classNames(cls.title, {}, [])}>{title}</p>}
      {text && <p className={classNames(cls.text, {}, [])}>{text}</p>}
    </div >
  )
}
