import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'admin1111',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD
}

describe('fetchProfileData service', () => {
  // it('success', async () => {
  //   const thunk = new TestAsyncThunk(fetchProfileData);
  //   thunk.api.get.mockReturnValue(Promise.resolve({ data }));

  //   const result = await thunk.callThunk('1');

  //   expect(thunk.api.get).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(data);
  // })

  it('error', async () => {
    // const thunk = new TestAsyncThunk(fetchProfileData)
    // thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    // const result = await thunk.callThunk('1')
    // expect(result.meta.requestStatus).toBe('rejected')
  })
})
