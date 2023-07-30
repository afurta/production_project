import axios from 'axios'
import { loginByUserName } from './loginByUserName'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('LoginByUserName service', () => {
  // it('Success login', async () => {
  //   const userValue = {username: '123', id: '123'}
  //   mockedAxios.post.mockReturnValue(Promise.resolve({data:userValue}))
  //   const thunk = new TestAsyncThunk(loginByUserName)
  //   const result = await thunk.callThunk({username: '123', password: '123'})

  //   expect(thunk.dispatch).toHaveBeenCalledWith(UserActions.setAuthData(userValue))
  //   expect(mockedAxios.post).toHaveBeenCalledTimes(1)
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toBe(userValue)
  // })

  it('Error login', async () => {
    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalledTimes(1)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
