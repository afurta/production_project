import { NotificationList } from '@/entities/Notification'
import { ICONS } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDetectDevice } from '@/shared/lib/hooks/useDetectDevice'

import { memo, useCallback, useState } from 'react'
import cls from './NotificationBtn.module.scss'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Popover } from '@/shared/ui/deprecated/Popups'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'

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
      <Icon Svg={ICONS.Notification} inverted width={24} height={24} />
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
