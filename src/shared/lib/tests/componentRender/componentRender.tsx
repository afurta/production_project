import { DeepPartial } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { StoreProvider, StoreSchema } from 'app/providers/StoreProvider'
import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from '../../../config/i18n/i18nForTests'

export interface componentRenderOptions {
  route?: string
  initialStore?: DeepPartial<StoreSchema>
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {

  const {
    route = '/',
    initialStore
  } = options

  return render(
    <StoreProvider initialStore={initialStore}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>
          {component}
        </I18nextProvider>
      </MemoryRouter >
    </StoreProvider>
  )
}
