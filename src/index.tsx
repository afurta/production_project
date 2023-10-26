import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import '@/shared/config/i18n/i18n'
import './app/styles/index.scss'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate'
import { NetworkStatusContextProvider } from '@/app/providers/NetworkProvider'

const container = document.getElementById('root')

// Проверка того, что наш браузер поддерживает Service Worker API.
if ('serviceWorker' in navigator) {
  // Весь код регистрации у нас асинхронный.
  navigator.serviceWorker
    .register('./sw.js')
    .then((data) => console.log('sw working'))
    .catch((err) => console.log(err))
}

const root = createRoot(container!)
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <StoreProvider>
        <NetworkStatusContextProvider>
          <ForceUpdateProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ForceUpdateProvider>
        </NetworkStatusContextProvider>
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
