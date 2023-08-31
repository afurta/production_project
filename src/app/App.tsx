import { AppRouter } from '@/app/providers/AppRouter'
import { useTheme } from '@/app/providers/ThemeProvider'
import { getUserInitedState, initAuthData } from '@/entities/User'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeature } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInitedState)

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch, inited])

  if (!inited) {
    return <PageLoader />
  }

  return (
    <ToggleFeature
      feature={'isAppRedesigned'}
      off={
        <div id="app" className={classNames('app', {}, [theme])}>
          <Suspense fallback={''}>
            <Navbar />
            <div className="app-content">
              <Sidebar />
              {inited && <AppRouter />}
            </div>
          </Suspense>
        </div>
      }
      on={
        <div id="app" className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback={''}>
            <MainLayout
              content={<AppRouter />}
              sidebar={<Sidebar />}
              header={<Navbar />}
            />
          </Suspense>
        </div>
      }
    />
  )
}
