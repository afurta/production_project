import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeature } from '@/shared/lib/features'
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme
} from '@/shared/ui/deprecated/AppLink'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
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
    <ToggleFeature
      feature={'isAppRedesigned'}
      on={
        <AppLink
          to={item.path}
          className={classNames(
            cls.itemRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            []
          )}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span className={classNames(cls.link, {}, [])}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
          <IconDeprecated Svg={item.Icon} inverted />
          <span className={classNames(cls.link, {}, [])}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  )
}
