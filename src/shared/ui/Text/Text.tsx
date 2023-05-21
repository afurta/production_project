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

interface TextProps {
  title?: string
  text?: string
  className?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = (props: TextProps) => {
  const {
    title,
    text,
    className,
    align = TextAlign.CENTER,
    theme = TextTheme.DEFALUT
  } = props

  const mods: Mods = {
    [cls[align]]: true
  }

  return (
    <div className={classNames(cls.Title, mods, [cls[theme], className])}>
      {title && <div className={classNames(cls.title, {}, [])}>{title}</div>}
      {text && <div className={classNames(cls.text, {}, [])}>{text}</div>}
    </div >
  )
}
