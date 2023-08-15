import { Country } from '@/entities/Country/model/country'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { Select } from '@/shared/ui/deprecated/Select'
import { ToggleFeature } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country)
    },
    [onChange]
  )

  const listBoxProps = {
    value: value,
    label: 'Укажите страну',
    defaultValue: 'Укажите страну',
    items: options,
    onChange: onChangeHandler,
    readonly: readonly,
    className,
    direction: 'bottom right' as const
  }

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={<ListBox {...listBoxProps} />}
      off={<ListBoxDeprecated {...listBoxProps} />}
    />
  )
})
