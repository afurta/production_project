import { Country } from 'entities/Country/model/country'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Armenia, text: Country.Armenia },
  { value: Country.Russia, text: Country.Russia },
  { value: Country.Belarus, text: Country.Belarus },
  { value: Country.Kazakhstan, text: Country.Kazakhstan },
  { value: Country.Ukraine, text: Country.Ukraine },
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
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
