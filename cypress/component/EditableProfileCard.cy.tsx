import { EditableProfilePage } from '@/features/EditableProfilePage'
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender'

const USER_ID = '1'

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
    cy.mount(
      <TestProvider
        options={{
          initialStore: { user: { authData: { id: USER_ID } } }
        }}
      >
        <EditableProfilePage id={USER_ID} />
      </TestProvider>
    )
  })
})
