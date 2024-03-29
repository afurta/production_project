import { useAppToolbar } from '@/app/lib/useAppToolbar'
import { AppRouter } from '@/app/providers/AppRouter'
import { useTheme } from '@/app/providers/ThemeProvider'
import { withTheme } from './providers/ThemeProvider/ui/withTheme'
import { getUserInitedState, initAuthData } from '@/entities/User'
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeature } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NetworkWatcher } from '@/app/providers/NetworkProvider'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInitedState)
  const toolbar = useAppToolbar()

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch, inited])

  if (!inited) {
    return (
      <ToggleFeature
        feature="isAppRedesigned"
        on={
          <div id="app" className={classNames('app_redesigned', {}, [theme])}>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    )
  }

  return (
    <ToggleFeature
      feature={'isAppRedesigned'}
      on={
        <div id="app" className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback={''}>
            <MainLayout
              content={<AppRouter />}
              sidebar={<Sidebar />}
              header={<Navbar />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
      off={
        <div id="app" className={classNames('app', {}, [theme])}>
          <Suspense fallback={''}>
            <Navbar />
            <div className="app-content">
              <Sidebar />
              {inited && <AppRouter />}
            </div>
            <NetworkWatcher />
          </Suspense>
        </div>
      }
    />
  )
}

export default withTheme(App)
