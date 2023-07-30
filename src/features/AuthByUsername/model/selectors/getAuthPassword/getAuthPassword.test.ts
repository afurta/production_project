import { StoreSchema } from '@/app/providers/StoreProvider'
import { getAuthPassword } from './getAuthPassword'

describe('GetAuthPassword selector', () => {
  it('Check password field', () => {
    const state: DeepPartial<StoreSchema> = {
      loginForm: {
        password: 'password'
      }
    }
    expect(getAuthPassword(state as StoreSchema)).toEqual('password')
  })

  it('Check undefined filed', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getAuthPassword(state as StoreSchema)).toEqual('')
  })
})
