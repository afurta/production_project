import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { validateProfileData } from 'entities/ProfileCard/model/service/validateProfileData/validateProfileData'
import { ValidateProfileError } from 'entities/ProfileCard/model/types/ProfileSchema'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'fsd',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD,
}

describe('validateProfileData service', () => {
  it('success', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])    
  })

  it('incorrect username', async () => {
    const result = validateProfileData({...data, lastname: ''})

    expect(result).toEqual([ValidateProfileError.INCORRECT_LAST_NAME])    
  })

  it('incorrect username', async () => {
    const result = validateProfileData({...data, age: 32.43})

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])    
  })

  it('incorrect city', async () => {
    const result = validateProfileData({...data, city: ''})

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])    
  })
})
 

