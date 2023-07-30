import { NotificationList } from '@/entities/Notification'
import { ICONS } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDetectDevice } from '@/shared/lib/hooks/useDetectDevice'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { Icon } from '@/shared/ui/Icon'
import { Popover } from '@/shared/ui/Popups'
import { memo, useCallback, useState } from 'react'
import cls from './NotificationBtn.module.scss'

interface NotificationBtnProps {
  className?: string
}

export const NotificationBtn = memo((props: NotificationBtnProps) => {
  const { className } = props
  const isMobile = useDetectDevice()

  const [state, setState] = useState<boolean>(false)
  const openHandler = useCallback(() => setState(true), [])
  const closeHandler = useCallback(() => setState(false), [])

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={openHandler}>
      <Icon Icon={ICONS.Notification} inverted />
    </Button>
  )

  const mobileContent = (
    <>
      {trigger}
      <Drawer isOpen={state} onClose={closeHandler}>
        <NotificationList />
      </Drawer>
    </>
  )

  const BrowserContent = (
    <Popover
      trigger={trigger}
      className={classNames(cls.notificationBtn, {}, [className])}
    >
      <NotificationList className={classNames(cls.notificationList)} />
    </Popover>
  )
  return <>{isMobile ? BrowserContent : mobileContent}</>
})
