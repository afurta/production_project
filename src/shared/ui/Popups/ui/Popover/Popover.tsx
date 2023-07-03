import { FC, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classnames'
import { Popover as HPopover } from '@headlessui/react'
import cls from './Popover.module.scss'
import popupStyles from '../../styles/popup.module.scss'
import { mapPopupDirection } from '@/shared/ui/Popups/styles/consts'
import { DropdownDirection } from '@/shared/types'

interface PopoverProps {
  className?: string
  trigger: ReactNode
  children: ReactNode
  direction?: DropdownDirection
}

export const Popover: FC<PopoverProps> = (props) => {
  const {
    className, trigger, children, direction = 'bottom left'
  } = props

  const menuClasses = [mapPopupDirection[direction]]

  return (
    <HPopover className={classNames(cls.popover, {}, [className, popupStyles.popup])}>
      <HPopover.Button
        className={classNames(popupStyles.trigger, {}, [cls.popoverTrigger])}
      >
        {trigger}
      </HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>

  )
}
