import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/RouterConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          path={path}
          key={path}
          element={
            <Suspense fallback={<PageLoader />}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
