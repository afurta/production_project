import {
  UserActions,
  getUserAuthData,
  isUserAdmin,
  isUserManager
} from '@/entities/User'
import {
  getAdminPanelRoute,
  getProfileRoute,
  getSettignsRoute
} from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeature } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispath = useAppDispatch()

  const onLogOut = useCallback(() => dispath(UserActions.logout()), [dispath])

  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvaliable = isAdmin || isManager

  if (!authData) return null

  const items = [
    ...(isAdminPanelAvaliable
      ? [{ href: getAdminPanelRoute(), content: t('Админка') }]
      : []),
    { href: getProfileRoute(authData.id), content: t('Профиль') },
    { href: getSettignsRoute(), content: t('Настройки') },
    { onClick: onLogOut, content: t('Выйти') }
  ]

  return (
    <ToggleFeature
      feature={'isAppRedesigned'}
      on={
        <Dropdown
          className={classNames('', {}, [className])}
          direction="bottom left"
          control={<Avatar src={authData.avatar} size={28} />}
          items={items}
        />
      }
      off={
        <DropdownDeprecated
          className={classNames('', {}, [className])}
          direction="bottom left"
          control={
            <AvatarDeprecated
              src={authData.avatar}
              size={30}
              fallbackInverted
            />
          }
          items={items}
        />
      }
    />
  )
}
