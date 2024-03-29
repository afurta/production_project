import { StoreSchema } from '@/app/providers/StoreProvider'
import { ValidateProfileError } from '@/features/EditableProfilePage'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileForm selector', () => {
  it('Check error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCORRECT_AGE]
      }
    }

    expect(getProfileValidateErrors(state as StoreSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE
    ])
  })

  it('Check getProfileForm undefined field', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {}
    }
    expect(getProfileValidateErrors(state as StoreSchema)).toEqual(undefined)
  })
})
