import { StoreSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileForm } from 'features/EditableProfilePage/model/selectors/getProfileForm/getProfileForm'
import { ProfileSchema } from 'features/EditableProfilePage/model/types/ProfileSchema'

const data = {
  'first': 'ffdsf',
  'lastname': 'Ульбиdfs',
  'age': 344,
  'currency': Currency.EUR,
  'country': Country.Armenia,
  'city': 'fdsaf',
  'username': 'admin',
  'avatar': 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
}

describe('getProfileForm selector', ()=>{
  it('Check error state', ()=>{
    const state:DeepPartial<StoreSchema> = {
      profile:{
        form: data
      }
    } 

    expect(getProfileForm(state as StoreSchema)).toEqual(data)
  })

  it('Check getProfileForm undefined field', ()=>{
    const state:DeepPartial<ProfileSchema> = {
    } 
    expect(getProfileForm(state as StoreSchema)).toEqual(undefined)
  })

})
