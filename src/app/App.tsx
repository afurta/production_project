import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { AppRouter } from './providers/AppRouter'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { UserActions } from 'entities/User'
import { useDispatch } from 'react-redux'
import { useTheme } from 'app/providers/ThemeProvider'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(UserActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Navbar />
        <div className="app-content">
          <Sidebar />
          <div className="app-page">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div >
  )
}
