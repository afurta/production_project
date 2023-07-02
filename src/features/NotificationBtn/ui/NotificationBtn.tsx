import { NotificationList } from 'entities/Notification'
import { memo } from 'react'
import { ICONS } from 'shared/assets'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationBtn.module.scss'

interface NotificationBtnProps {
  className?: string
}

export const NotificationBtn = memo((props: NotificationBtnProps) => {
  const { className } = props

  return (
    <Popover
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Icon={ICONS.Notification} inverted />
        </Button>
      }
      className={classNames(cls.notificationBtn, {}, [className])}
    >
      <NotificationList className={classNames(cls.notificationList)} />
    </Popover>
  )
})
