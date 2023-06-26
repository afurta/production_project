import { RequireAuth } from 'app/providers/AppRouter/ui/RequireAuth'
import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/RouterConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {

  const renderAppRoutesWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    )
    return (
      <Route
        path={route.path}
        key={route.path}
        element={
          route.isAuthOnly
            ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
            : element
        }
      />
    )
  }, [])

  return (
    <Routes>
      {Object.values(routeConfig).map(renderAppRoutesWithWrapper)}
    </Routes>
  )
}
