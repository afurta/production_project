import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider'
import { getAuthPassword } from './getAuthPassword'

describe('GetAuthPassword selector', ()=>{
  it('Check password field', ()=>{
    const state:DeepPartial<StoreSchema> = {
      auth:{
        password: 'password'
      }
    } 
    expect(getAuthPassword(state)).toEqual('password')
  })

  it('Check undefined filed', ()=>{
    const state:DeepPartial<StoreSchema> = {} 
    expect(getAuthPassword(state)).toEqual('')
  })

})
