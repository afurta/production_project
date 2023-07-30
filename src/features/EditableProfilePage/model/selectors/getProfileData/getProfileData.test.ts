import { StoreSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileSchema } from '@/features/EditableProfilePage'
import { getProfileData } from '@/features/EditableProfilePage/model/selectors/getProfileData/getProfileData'

const data = {
  first: 'ffdsf',
  lastname: 'Ульбиdfs',
  age: 344,
  currency: Currency.EUR,
  country: Country.Armenia,
  city: 'fdsaf',
  username: 'admin',
  avatar:
    'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
}

describe('getErrorProfile selector', () => {
  it('Check error state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        data
      }
    }

    expect(getProfileData(state as StoreSchema)).toEqual(data)
  })

  it('Check getErrorProfile undefined field', () => {
    const state: DeepPartial<ProfileSchema> = {}
    expect(getProfileData(state as StoreSchema)).toEqual(undefined)
  })
})
