import { NotificationList } from '@/entities/Notification'
import { ICONS, ICONS_NEW } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDetectDevice } from '@/shared/lib/hooks/useDetectDevice'

import { memo, useCallback, useState } from 'react'
import cls from './NotificationBtn.module.scss'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button'
import { ToggleFeature } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'

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
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <Icon
          Svg={ICONS_NEW.Notification}
          clickable
          onClick={openHandler}
          width={40}
          height={40}
        />
      }
      off={
        <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={openHandler}>
          <IconDeprecated
            Svg={ICONS.Notification}
            inverted
            width={24}
            height={24}
          />
        </ButtonDeprecated>
      }
    />
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
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <Popover
          trigger={trigger}
          className={classNames(cls.notificationBtn, {}, [className])}
        >
          <NotificationList className={classNames(cls.notificationList)} />
        </Popover>
      }
      off={
        <PopoverDeprecated
          trigger={trigger}
          className={classNames(cls.notificationBtn, {}, [className])}
        >
          <NotificationList className={classNames(cls.notificationList)} />
        </PopoverDeprecated>
      }
    />
  )
  return <>{isMobile ? BrowserContent : mobileContent}</>
})
