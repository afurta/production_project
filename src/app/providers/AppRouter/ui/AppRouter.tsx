import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/RouterConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

export const AppRouter = () => {
  const isAuthUser = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(elem => (
      !isAuthUser && elem.isAuthOnly ? false : true
    ))

  }, [isAuthUser])

  return (
    <Routes>
      {
        routes.map(({ path, element }) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={<PageLoader />}>
                {element}
              </Suspense>
            }
          />
        ))
      }
    </Routes>
  )
}
