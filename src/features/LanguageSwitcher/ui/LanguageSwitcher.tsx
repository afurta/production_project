import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'

interface LanguageSwitcherProps {
  className?: string
  isShorten: boolean
}

export const LanguageSwitcher = memo(
  ({ className, isShorten }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const __changeLanguage = () =>
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

    return (
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={__changeLanguage}
        className={className}
        data-testid="language-switcher"
      >
        {t(isShorten ? 'Сокращение' : 'Язык')}
      </Button>
    )
  }
)
