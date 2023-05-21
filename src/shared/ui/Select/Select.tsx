import { classNames } from 'shared/lib/classNames/classnames'
import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

interface SelectOption {
  value: string
  text: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, onChange, readonly, value } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => (
    onChange?.(e.target.value)
  )

  const optionsList = useMemo(() => (options?.map(elem => (
    <option
      className={cls.option}
      value={elem.value}
      key={elem.value}
    >
      {elem.text}
    </option>
  ))
  ), [options])

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])}>
      {label && <span className={classNames(cls.label)}>{label + ' >'}</span>}
      <select value={value} onChange={onChangeHandler} className={classNames(cls.Select)} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  )
})
