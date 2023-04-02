import { classNames } from 'shared/lib/classNames/classnames'
import cls from './Text.module.scss'

export enum TextTheme {
  DEFALUT = 'default',
  ERROR = 'error'
}

interface TextProps {
  title?: string
  text?: string
  className?: string
  theme?: TextTheme
}

export const Text = (props: TextProps) => {
  const {
    title,
    text,
    className,
    theme = TextTheme.DEFALUT
  } = props

  return (
    <div className={classNames(cls.Title, {}, [cls[theme], className])}>
      {title && <div className={classNames(cls.title, {}, [])}>{title}</div>}
      {text && <div className={classNames(cls.text, {}, [])}>{text}</div>}
    </div >
  )
}
