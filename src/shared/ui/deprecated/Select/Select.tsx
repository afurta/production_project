import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, useMemo } from 'react'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

/**
 * @deprecated
 */
export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, onChange, readonly, value } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) =>
    onChange?.(e.target.value as T)

  const optionsList = useMemo(
    () =>
      options?.map((elem) => (
        <option className={cls.option} value={elem.value} key={elem.value}>
          {elem.content}
        </option>
      )),
    [options]
  )

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])}>
      {label && <span className={classNames(cls.label)}>{label + ' >'}</span>}
      <select
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.Select)}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  )
}
