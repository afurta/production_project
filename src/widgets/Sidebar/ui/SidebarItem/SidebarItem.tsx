import { useTranslation } from 'react-i18next'
import { SidebarItemType } from '../../types/SidebarItems'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './SidebarItem.module.scss'

interface SidebarItem {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItem) => {
  const { t } = useTranslation()

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
