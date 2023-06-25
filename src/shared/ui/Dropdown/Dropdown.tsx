import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './Dropdown.module.scss'
import { DropdownDirection } from 'shared/types'

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
  const {
    className,
    control,
    items,
    direction = 'bottom left'
  } = props

  const mapDropdownDirection: Record<DropdownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight
  }

  const { t } = useTranslation()

  return (
    <Menu as='div' className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button className={classNames(cls.btn)}>{control}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [mapDropdownDirection[direction]])}>
        {items.map(item => {
          if (item.href) {
            return (
              <Menu.Item as='div' className={classNames(cls.item)} disabled={item.disabled}>
                {({ active }) => (
                  <AppLink
                    className={classNames(cls.item, { [cls.active]: active })}
                    to={item.href!}
                  >
                    {item.content}
                  </AppLink>
                )}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item >
              {({ active }) => (
                <button
                  className={classNames(cls.item, { [cls.active]: active })}
                  onClick={item.onClick}
                  disabled={item.disabled}
                >
                  {item.content}
                </button>
              )}
            </Menu.Item>
          )
        })}

      </Menu.Items>
    </Menu >
  )
}
