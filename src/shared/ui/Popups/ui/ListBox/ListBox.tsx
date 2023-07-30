import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/sort'
import { Button } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { mapPopupDirection } from '../../styles/consts'
import popupStyles from '../../styles/popup.module.scss'
import cls from './ListBox.module.scss'

interface IListItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface HListboxProps {
  className?: string
  value?: string
  label: string
  defaultValue: string
  readonly?: boolean
  listItems: IListItem[]
  onChange?: (value: string) => void
  direction?: DropdownDirection
}

export const ListBox = (props: HListboxProps) => {
  const {
    className,
    value,
    defaultValue,
    label,
    listItems,
    onChange,
    readonly,
    direction = 'bottom right'
  } = props

  const { t } = useTranslation()

  return (
    <HStack gap={8} align={'between'}>
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
        <HListbox.Button className={popupStyles.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [
            mapPopupDirection[direction]
          ])}
        >
          {listItems?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.content}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupStyles.active]: active,
                    [popupStyles.disabled]: item.disabled
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
