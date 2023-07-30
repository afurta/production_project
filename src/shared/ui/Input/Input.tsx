import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  placeholder?: string
  value?: string | number
  type?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    placeholder,
    value,
    onChange,
    type = 'text',
    autoFocus,
    readonly,
    ...othersProps
  } = props

  const [caretPosition, setCaretPosition] = useState<number>(0)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
    setCaretPosition(e.currentTarget.value.length)
  }

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)
  const onSelect = (e: any) => setCaretPosition(e.target.selectionStart || 0)

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
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
          readOnly={readonly}
          {...othersProps}
        />
        {isFocused && !readonly && (
          <span
            className={classNames(cls.Caret, {}, [])}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  )
})
