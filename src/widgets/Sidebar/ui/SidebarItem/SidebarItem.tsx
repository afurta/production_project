import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { SidebarItemType } from '../../types/SidebarItems'
import cls from './SidebarItem.module.scss'

interface SidebarItem {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItem) => {
  const { t } = useTranslation()

  const isAuth = useSelector(getUserAuthData)

  if (item.isAutOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
    >
      <item.Icon className={classNames(cls.icon, {}, [])} />
      <span className={classNames(cls.link, {}, [])}>{t(item.text)}</span>
    </AppLink>
  )
}
