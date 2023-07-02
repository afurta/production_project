import { NotificationList } from 'entities/Notification'
import { memo, useCallback, useEffect, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { ICONS } from 'shared/assets'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationBtn.module.scss'
import { useDetectDevice } from 'shared/lib/hooks/useDetectDevice'

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
      <Drawer isOpen={state} onClose={closeHandler} >
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
  return (
    <>
      {isMobile ? BrowserContent : mobileContent}
    </>
  )
})
