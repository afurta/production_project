import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/sort'
import { AppLink } from '@/shared/ui/AppLink'
import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { mapPopupDirection } from '../../styles/consts'
import popupStyles from '../../styles/popup.module.scss'
import cls from './Dropdown.module.scss'

interface DropdownItem {
  disabled?: boolean
  onClick?: () => void
  content?: ReactNode
  href?: string
}

interface DropdownProps {
  className?: string
  control: ReactNode
  items: DropdownItem[]
  direction: DropdownDirection
}

export const Dropdown = (props: DropdownProps) => {
  const { className, control, items, direction = 'bottom left' } = props

  return (
    <Menu
      as="div"
      className={classNames(cls.dropdown, {}, [className, popupStyles.popup])}
    >
      <Menu.Button className={classNames(popupStyles.trigger)}>
        {control}
      </Menu.Button>
      <Menu.Items
        className={classNames(cls.menu, {}, [mapPopupDirection[direction]])}
      >
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [popupStyles.active]: active })}
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
