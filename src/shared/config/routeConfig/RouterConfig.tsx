import { UserRoles } from 'entities/User'
import { AboutPage } from 'pages/AboutPage'
import { AdminPanel } from 'pages/AdminPanel'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import Forbidden from 'pages/Forbidden/ui/Forbidden'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
  isAuthOnly?: boolean
  roles?: UserRoles[]
}
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_CREATE = 'articles_create',
  ARTICLES_EDIT = 'articles_edit',
  ARTICLE_DETAILS = 'article_details',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLES_CREATE]: '/articles/new',
  [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/',
  [AppRoutes.ADMIN_PANEL]: '/admin-panel/',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    isAuthOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    isAuthOnly: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    isAuthOnly: true
  },
  [AppRoutes.ARTICLES_CREATE]: {
    path: `${RoutePath.articles_create}`,
    element: <ArticleEditPage />,
    isAuthOnly: true
  },
  [AppRoutes.ARTICLES_EDIT]: {
    path: `${RoutePath.articles_edit}`,
    element: <ArticleEditPage />,
    isAuthOnly: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanel />,
    isAuthOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER]
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <Forbidden />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  },
}
