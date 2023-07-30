import { StoreSchema } from '@/app/providers/StoreProvider'
import { getReadonlyProfile } from '@/features/EditableProfilePage/model/selectors/getReadonlyProfile/getReadonlyProfile'
import { ProfileSchema } from '@/features/EditableProfilePage/model/types/ProfileSchema'

describe('getReadonlyProfile selector', () => {
  it('Check error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        readonly: true
      }
    }

    expect(getReadonlyProfile(state as StoreSchema)).toEqual(true)
  })

  it('Check getReadonlyProfile undefined field', () => {
    const state: DeepPartial<ProfileSchema> = {}
    expect(getReadonlyProfile(state as StoreSchema)).toEqual(undefined)
  })
})
