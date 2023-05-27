import { ICONS } from 'shared/assets'
import { RoutePath } from 'shared/config/routeConfig/RouterConfig'

export interface SidebarItemType {
  path: string
  text: string
  Icon: any
  isAutOnly?: boolean
}

export const SidebarItems: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: ICONS.Main
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: ICONS.AboutUs
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ICONS.Profile,
    isAutOnly: true
  },
  {
    path: RoutePath.articles,
    text: 'Статьи',
    Icon: ICONS.Articles,
    isAutOnly: true
  }
]
