import { Listbox as HListbox } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button } from 'shared/ui/Button/Button'
import { HStack } from 'shared/ui/Stack'
import cls from './ListBox.module.scss'
import { Fragment, ReactNode } from 'react'
import { DropdownDirection } from 'shared/types'

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

  const mapOptionsClasses: Record<DropdownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight
  }

  return (
    <HStack gap={8} align={'between'}>
      {label && <span className={classNames(cls.ListBoxLabel)}>{`${label}>`}</span>}
      <HListbox
        as="div"
        onChange={onChange}
        value={value}
        className={classNames(cls.ListBox, {}, [className])}
        disabled={readonly}
      >
        <HListbox.Button className={cls.trigger} >
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(cls.options, {}, [mapOptionsClasses[direction]])}>
          {listItems?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.content}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={
                    classNames(cls.item,
                      {
                        [cls.active]: active,
                        [cls.disabled]: item.disabled
                      })
                  }
                >
                  {selected && '>'}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack >

  )
}