import { Currency } from '../../model/currency'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, text: Currency.RUB },
  { value: Currency.EUR, text: Currency.EUR },
  { value: Currency.USD, text: Currency.USD },
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <Select
      className={className}
      options={options}
      value={value}
      label={t('Укажите валюту')}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  )
})
