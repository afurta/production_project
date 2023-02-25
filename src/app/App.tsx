import { Suspense } from 'react'
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from 'shared/lib/ClassNames/classNames'
import './styles/index.scss'
import { AppRouter } from './providers/AppRouter'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { Sidebar } from 'widgets/Sidebar';

const App = () => {

  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
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

export default App