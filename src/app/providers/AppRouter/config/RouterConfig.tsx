import { UserRoles } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanel } from '@/pages/AdminPanel'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { Forbidden } from '@/pages/Forbidden'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import {
  AppRoutes,
  getAboutRoute,
  getAdminPanelRoute,
  getArticleDetailsRoute,
  getArticlesCreateRoute,
  getArticlesEditRoute,
  getArticlesRoute,
  getForbiddenRoute,
  getMainRoute,
  getNotFoundRoute,
  getProfileRoute
} from '@/shared/constants/router'
import { AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getMainRoute(),
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: getAboutRoute(),
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: getProfileRoute(':id'),
    element: <ProfilePage />,
    isAuthOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: getArticlesRoute(),
    element: <ArticlesPage />,
    isAuthOnly: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getArticleDetailsRoute(':id'),
    element: <ArticleDetailsPage />,
    isAuthOnly: true
  },
  [AppRoutes.ARTICLES_CREATE]: {
    path: getArticlesCreateRoute(),
    element: <ArticleEditPage />,
    isAuthOnly: true
  },
  [AppRoutes.ARTICLES_EDIT]: {
    path: getArticlesEditRoute(':id'),
    element: <ArticleEditPage />,
    isAuthOnly: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getAdminPanelRoute(),
    element: <AdminPanel />,
    isAuthOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER]
  },
  [AppRoutes.FORBIDDEN]: {
    path: getForbiddenRoute(),
    element: <Forbidden />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: getNotFoundRoute(),
    element: <NotFoundPage />
  },
}
