import { useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { ICONS } from '@/shared/assets'

interface CodeProps {
  className?: string
  text: string
}

/**
 * @deprecated
 */
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