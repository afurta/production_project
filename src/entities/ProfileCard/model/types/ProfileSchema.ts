import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

export interface Profile{
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

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
