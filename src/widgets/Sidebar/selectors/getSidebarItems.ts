import { ICONS } from '@/shared/assets'
import { getUserAuthData } from '@/entities/User'
import { getAboutRoute, getArticlesRoute, getMainRoute, getProfileRoute } from '@/shared/constants/router'
import { SidebarItemType } from '../types/SidebarItems'
import { createSelector } from '@reduxjs/toolkit'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getMainRoute(),
        Icon: ICONS.Main,
        text: 'Главная',
      },
      {
        path: getAboutRoute(),
        Icon: ICONS.AboutUs,
        text: 'О сайте',
      },
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: getProfileRoute(userData.id),
          Icon: ICONS.Profile,
          text: 'Профиль',
          isAutOnly: true,
        },
        {
          path: getArticlesRoute(),
          Icon: ICONS.Articles,
          text: 'Статьи',
          isAutOnly: true,
        },
      )
    }

    return sidebarItemsList
  },
)
