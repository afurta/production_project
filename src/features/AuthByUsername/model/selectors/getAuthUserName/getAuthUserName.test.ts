import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider'
import { getAuthUsername } from './getAuthUserName'

describe('GetAuthUsername selector', ()=>{
  it('Check username field', ()=>{
    const state:DeepPartial<StoreSchema> = {
      auth:{
        username: 'username'
      }
    } 
    expect(getAuthUsername(state)).toEqual('username')
  })

  it('Check undefined filed', ()=>{
    const state:DeepPartial<StoreSchema> = {} 
    expect(getAuthUsername(state)).toEqual('')
  })

})
