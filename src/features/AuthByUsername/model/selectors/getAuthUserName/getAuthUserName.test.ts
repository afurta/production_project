import { StoreSchema } from '@/app/providers/StoreProvider'
import { getAuthUsername } from './getAuthUserName'

describe('GetAuthUsername selector', ()=>{
  it('Check username field', ()=>{
    const state:DeepPartial<StoreSchema> = {
      loginForm:{
        username: 'username'
      }
    } 
    expect(getAuthUsername(state as StoreSchema)).toEqual('username')
  })

  it('Check undefined filed', ()=>{
    const state:DeepPartial<StoreSchema> = {} 
    expect(getAuthUsername(state as StoreSchema)).toEqual('')
  })

})
