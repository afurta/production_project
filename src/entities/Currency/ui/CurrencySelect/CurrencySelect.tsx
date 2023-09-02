import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { Currency } from '../../model/currency'
import { ToggleFeature } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency)
    },
    [onChange]
  )
  const listBoxProps = {
    value: value,
    label: t('Укажите валюту'),
    defaultValue: t('Укажите валюту'),
    items: options,
    onChange: onChangeHandler,
    readonly: readonly,
    className: className,
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
