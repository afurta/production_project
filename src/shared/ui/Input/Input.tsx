import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  placeholder?: string
  value?: string
  type?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

export const Input = (props: InputProps) => {
  const {
    className,
    placeholder,
    value,
    onChange,
    type = 'text',
    autoFocus,
    ...othersProps
  } = props

  const [caretPosition, setCaretPosition] = useState<number>(0)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
    setCaretPosition(e.currentTarget.value.length)
  }

  const onFocus = () => setIsFocus(true)
  const onBlur = () => setIsFocus(false)
  const onSelect = (e: any) => setCaretPosition(e.target.selectionStart || 0)

  useEffect(() => {
    if (autoFocus) {
      setIsFocus(true)
      ref?.current?.focus()
    }
  }, [autoFocus])

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={classNames(cls.InputPlaceholder, {}, [])}>
          {`${placeholder} >`}
        </div>
      )}
      <div className={classNames(cls.CaretWrapper, {}, [])}>
        <input
          className={classNames(cls.Input, {}, [])}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...othersProps}
        />
        {isFocus && <span className={classNames(cls.Caret, {}, [])} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  )
}
