export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_CREATE = 'articles_create',
  ARTICLES_EDIT = 'articles_edit',
  ARTICLE_DETAILS = 'article_details',
  SETTINGS = 'settings',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found'
}

export const getMainRoute = () => `/`
export const getAboutRoute = () => `/about`
export const getSettignsRoute = () => `/settings`
export const getProfileRoute = (id: string) => `/profile/${id}`
export const getArticlesRoute = () => `/articles`
export const getArticlesCreateRoute = () => `/articles/new`
export const getArticlesEditRoute = (id: string) => `/articles/${id}/edit`
export const getArticleDetailsRoute = (id: string) => `/articles/${id}`
export const getAdminPanelRoute = () => `/admin-panel/`
export const getForbiddenRoute = () => `/forbidden`
export const getNotFoundRoute = () => '*'

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getMainRoute()]: AppRoutes.MAIN,
  [getAboutRoute()]: AppRoutes.ABOUT,
  [getSettignsRoute()]: AppRoutes.PROFILE,
  [getProfileRoute(':id')]: AppRoutes.ARTICLES,
  [getArticlesRoute()]: AppRoutes.ARTICLES_CREATE,
  [getArticlesCreateRoute()]: AppRoutes.ARTICLES_EDIT,
  [getArticlesEditRoute(':id')]: AppRoutes.ARTICLE_DETAILS,
  [getArticleDetailsRoute(':id')]: AppRoutes.SETTINGS,
  [getAdminPanelRoute()]: AppRoutes.ADMIN_PANEL,
  [getForbiddenRoute()]: AppRoutes.FORBIDDEN,
  [getNotFoundRoute()]: AppRoutes.NOT_FOUND
}
