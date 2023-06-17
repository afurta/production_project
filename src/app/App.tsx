import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { UserActions, getUserInitedState } from 'entities/User'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/AppRouter'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const inited = useSelector(getUserInitedState)

  useEffect(() => {
    dispatch(UserActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Navbar />
        <div className="app-content">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div >
  )
}
