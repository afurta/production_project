import { getUserAuthData } from '@/entities/User'
import { ICONS, ICONS_NEW } from '@/shared/assets'
import {
  getAboutRoute,
  getArticlesRoute,
  getMainRoute,
  getProfileRoute
} from '@/shared/constants/router'
import { toggleFeature } from '@/shared/lib/features'
import { useSelector } from 'react-redux'
import { SidebarItemType } from '../types/SidebarItems'

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData)
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getMainRoute(),
      Icon: toggleFeature({
        name: 'isAppRedesigned',
        on: () => ICONS_NEW.Main,
        off: () => ICONS.Main
      }),
      text: 'Главная'
    },
    {
      path: getAboutRoute(),
      Icon: toggleFeature({
        name: 'isAppRedesigned',
        on: () => ICONS_NEW.AboutUs,
        off: () => ICONS.AboutUs
      }),
      text: 'О сайте'
    }
  ]

  if (userData) {
    sidebarItemsList.push(
      {
        path: getProfileRoute(userData.id),
        Icon: toggleFeature({
          name: 'isAppRedesigned',
          on: () => ICONS_NEW.Profile,
          off: () => ICONS.Profile
        }),
        text: 'Профиль',
        isAutOnly: true
      },
      {
        path: getArticlesRoute(),
        Icon: toggleFeature({
          name: 'isAppRedesigned',
          on: () => ICONS_NEW.Articles,
          off: () => ICONS.Articles
        }),
        text: 'Статьи',
        isAutOnly: true
      }
    )
  }

  return sidebarItemsList
}
