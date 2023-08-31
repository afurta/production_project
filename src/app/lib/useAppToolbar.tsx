import { AppRoutes } from '@/shared/constants/router'
import { useRouteChange } from '@/shared/lib/router/useRouteChange'
import { ScrollToTopButton } from '@/widgets/ScrollToTopButton'
import { ReactElement } from 'react'

export const useAppToolbar = () => {
  const appRouter = useRouteChange()

  const toolbarByPathName: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToTopButton />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToTopButton />,
    [AppRoutes.MAIN]: <div>MAIN</div>,
    [AppRoutes.ABOUT]: <div>ABOUT</div>
  }

  return toolbarByPathName[appRouter]
}
