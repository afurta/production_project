import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import '@/shared/config/i18n/i18n'
import './app/styles/index.scss'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate'

const container = document.getElementById('root')

const root = createRoot(container!)
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ForceUpdateProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ForceUpdateProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
