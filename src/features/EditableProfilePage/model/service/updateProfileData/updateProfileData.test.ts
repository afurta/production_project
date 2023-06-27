import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
// import { ValidateProfileError, updateProfileData } from 'features/EditableProfilePage'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD,
}

describe('updateProfileData service', () => {
  // it('success', async () => {
  //   const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: data}})
  //   thunk.api.put.mockReturnValue(Promise.resolve({data}))
  //   const result = await thunk.callThunk()

  //   expect(thunk.api.put).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toEqual(data)
  // })

  // it('error', async () => {
  //   const thunk = new TestAsyncThunk(updateProfileData, {
  //     profile: {
  //       form: data,
  //     },
  //   })
  //   thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const result = await thunk.callThunk()

  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toEqual([ValidateProfileError.INCORRECT_DATA])
  // })

  // it('validate error', async () => {
  //   const thunk = new TestAsyncThunk(updateProfileData, {
  //     profile: {
  //       form: {...data, lastname: ''},
  //     },
  //   })
  //   thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const result = await thunk.callThunk()

  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toEqual([ValidateProfileError.INCORRECT_LAST_NAME])
  // })
})
 

