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

/**
 * @deprecated
 */
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

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(e.currentTarget.value)

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)

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
          className={classNames(cls.Input, { [cls.focused]: isFocused }, [])}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={readonly}
          {...othersProps}
        />
      </div>
    </div>
  )
})
