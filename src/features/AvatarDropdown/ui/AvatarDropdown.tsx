import { UserActions, getUserAuthData, isUserAdmin, isUserManager } from '@/entities/User'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classnames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Dropdown } from '@/shared/ui/Popups'
import { getAdminPanelRoute, getProfileRoute } from '@/shared/constants/router'
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

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction='bottom left'
      control={<ICONS.User width='32' height='32' />}
      items={[
        ...(
          isAdminPanelAvaliable
            ? [{ href: getAdminPanelRoute(), content: t('Админка') }]
            : []
        ),
        { href: getProfileRoute(authData.id), content: t('Профиль') },
        { onClick: onLogOut, content: t('Выйти') }
      ]}
    />
  )
}
