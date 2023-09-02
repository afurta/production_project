import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/sort'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Listbox as HListbox } from '@headlessui/react'
import React, { Fragment, ReactNode, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { mapPopupDirection } from '../../styles/consts'
import popupStyles from '../../styles/popup.module.scss'
import cls from './ListBox.module.scss'
import { Button } from '@/shared/ui/redesigned/Button'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { ICONS_NEW } from '@/shared/assets'

export interface ListBoxItem<T extends string> {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface HListboxProps<T extends string> {
  items?: ListBoxItem<T>[]
  className?: string
  value?: T
  label?: string
  defaultValue?: string
  readonly?: boolean
  onChange: (value: T) => void
  direction?: DropdownDirection
}

export const ListBox = <T extends string>(props: HListboxProps<T>) => {
  const {
    className,
    value,
    defaultValue = '',
    label = '',
    items,
    onChange,
    readonly,
    direction = 'bottom right'
  } = props

  const { t } = useTranslation()

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.content === value)
  }, [items, value])

  return (
    <HStack gap={8} align={'center'}>
      {label && (
        <span className={classNames(cls.ListBoxLabel)}>{`${label}>`}</span>
      )}
      <HListbox
        as="div"
        onChange={onChange}
        value={value}
        className={classNames(cls.ListBox, {}, [className, popupStyles.popup])}
        disabled={readonly}
      >
        <HListbox.Button className={popupStyles.trigger} as={Button}>
          <Button
            variant="filled"
            disabled={readonly}
            iconRight={<Icon Svg={ICONS_NEW.Arrow} />}
          >
            {selectedItem?.content ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [
            mapPopupDirection[direction],
            popupStyles.menu
          ])}
        >
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.content}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupStyles.active]: active,
                    [popupStyles.disabled]: item.disabled,
                    [popupStyles.selected]: selected
                  })}
                >
                  {selected && '>'}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  )
}
