import { Profile } from 'entities/ProfileCard/model/types/Profile'

export interface ProfileSchema{
  data?: Profile 
  form?: Profile 
  error?: string 
  isLoading?: boolean
  readonly?: boolean
  validateErrors?: ValidateProfileError[]
}

export enum ValidateProfileError{
  INCORRECT_FIRST_NAME = 'INCORRECT_FIRST_NAME',
  INCORRECT_LAST_NAME = 'INCORRECT_LAST_NAME',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  INCORRECT_CITY = 'INCORRECT_CITY',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
  INCORRECT_DATA = 'INCORRECT_DATA'
}