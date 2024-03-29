import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { ToggleFeature } from '@/shared/lib/features'
import cls from './LanguageSwitcher.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

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
      <ToggleFeature
        feature={'isAppRedesigned'}
        on={
          <Button variant={'clear'} onClick={__changeLanguage}>
            {t(isShorten ? 'Сокращение' : 'Язык')}
          </Button>
        }
        off={
          <ButtonDeprecated
            theme={ButtonTheme.CLEAR}
            onClick={__changeLanguage}
            className={classNames(cls.LanguageSwitcher, {}, [])}
            data-testid="language-switcher"
          >
            {t(isShorten ? 'Сокращение' : 'Язык')}
          </ButtonDeprecated>
        }
      />
    )
  }
)
