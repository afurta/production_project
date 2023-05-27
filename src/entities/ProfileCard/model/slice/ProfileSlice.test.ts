import { ProfileActions, ProfileReducer } from 'entities/ProfileCard/model/slice/ProfileSlice'
import { ProfileSchema } from '../types/ProfileSchema'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'fsd',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD,
}

const initialState:ProfileSchema = {
  data: data,
  error: undefined,
  isLoading: false,
  readonly: false
}

describe('Profile', () => {  
  it('Check setReadonly action', () => {  
    const state: DeepPartial<ProfileSchema> = {readonly: false}

    expect(
      ProfileReducer(
        state as ProfileSchema, 
        ProfileActions.setReadonly(true)
      )
    ).toEqual({readonly: true})
  })

  it('Check cancelEdit action', () => {  
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
      validateErrors: undefined,
      form: initialState.data,
    }

    expect(
      ProfileReducer(
        state as ProfileSchema, 
        ProfileActions.cancelEdit()
      )
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      form: undefined,
    })
  })

  it('Check updateProfile action', () => {  
    const state: DeepPartial<ProfileSchema> = {form:initialState.data}

    expect(
      ProfileReducer(
        state as ProfileSchema, 
        ProfileActions.updateProfile({lastname: 'qwery'})
      )
    ).toEqual({
      form:{
        ...initialState.data,
        lastname: 'qwery'
      }
    })
  })



})
