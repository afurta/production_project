import { useTranslation } from 'react-i18next'
import { SidebarItemType } from '../../types/SidebarItems'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './SidebarItem.module.scss'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useSelector } from 'react-redux'

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
