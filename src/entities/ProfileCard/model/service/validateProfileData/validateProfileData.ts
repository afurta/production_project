import { Profile, ValidateProfileError } from '../../../model/types/ProfileSchema'

export const validateProfileData = (profile?: Profile)=>{
  const errorArr:ValidateProfileError[] = []

  if (!profile) {
    return [ValidateProfileError.INCORRECT_DATA]
  }

  const {
    first,
    lastname,
    age,
    currency,
    country,
    city,
    username,
  } = profile


  if (!first || first?.length < 3) errorArr.push(ValidateProfileError.INCORRECT_FIRST_NAME)
  if (!lastname || lastname?.length < 3) errorArr.push(ValidateProfileError.INCORRECT_LAST_NAME)
  if (!age || !Number.isInteger(age)) errorArr.push(ValidateProfileError.INCORRECT_AGE)
  if (!currency || !currency.length) errorArr.push(ValidateProfileError.INCORRECT_CURRENCY)
  if (!country || !country.length) errorArr.push(ValidateProfileError.INCORRECT_COUNTRY)
  if (!city || !city.length) errorArr.push(ValidateProfileError.INCORRECT_CITY)
  if (!username) errorArr.push(ValidateProfileError.INCORRECT_USERNAME)
  
  return errorArr
}
