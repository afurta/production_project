import { useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classnames'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { ICONS } from '@/shared/assets'

interface CodeProps {
  className?: string
  text: string
}

export const Code = ({ text, className }: CodeProps) => {
  const copyHandler = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={classNames(cls.copyBtn, {}, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={copyHandler}
      >
        <ICONS.Copy className={classNames(cls.icon)} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}
