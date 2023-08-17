import { ICONS_NEW } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeature } from '@/shared/lib/features'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { memo, useCallback } from 'react'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo(({ text, className }: CodeProps) => {
  const copyHandler = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon
            clickable
            onClick={copyHandler}
            className={cls.copyBtn}
            Svg={ICONS_NEW.CopyIcon}
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <Button
            onClick={copyHandler}
            className={cls.copyBtn}
            theme={ButtonTheme.CLEAR}
          >
            <ICONS_NEW.CopyIcon className={cls.copyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
    />
  )
})
