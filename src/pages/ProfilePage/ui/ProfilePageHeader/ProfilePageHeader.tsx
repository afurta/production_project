import { classNames } from 'shared/lib/classNames/classnames'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'

interface ProfilePageHeaderProps {
  className?: string
  onEdit: () => void
  onCancelEdit: () => void
  onSave: () => void
  readonly?: boolean
}
export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className, readonly, onEdit, onCancelEdit, onSave } = props

  const { t } = useTranslation('profile')

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {
        readonly
          ? (
            <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={() => onEdit()}
            >
              {t('Редактировать')}
            </Button>
          )
          : (
            <div>
              <Button
                className={cls.cancelBtn}
                theme={ButtonTheme.OUTLINE_RED}
                onClick={() => onCancelEdit()}
              >
                {t('Отменить')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={() => onSave()}
              >
                {t('Сохранить')}
              </Button>
            </div>
          )
      }
    </div>
  )
}
