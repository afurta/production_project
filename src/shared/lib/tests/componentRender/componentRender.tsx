import { render } from '@testing-library/react'
import { StoreProvider, StoreSchema } from '@/app/providers/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from '../../../config/i18n/i18nForTests'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Theme } from '@/shared/types/theme'
import '@/app/styles/index.scss'

export interface componentRenderOptions {
  route?: string
  initialStore?: DeepPartial<StoreSchema>
  theme?: Theme
}

export interface TestProviderProps {
  children: ReactNode
  options?: componentRenderOptions
}

export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props
  const { route = '/', initialStore, theme = Theme.LIGHT } = options

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialStore={initialStore}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter >
  )
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
  return render(
    <TestProvider options={options}>{component}</TestProvider>
  )
}
