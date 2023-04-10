import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider'
import { getAuthIsError } from './getAuthIsError'

describe('GetAuthIsError selector', ()=>{
  it('Check error state', ()=>{
    const state:DeepPartial<StoreSchema> = {
      auth:{
        error: 'error'
      }
    } 
    expect(getAuthIsError(state)).toEqual('error')
  })

  it('Check undefined filed', ()=>{
    const state:DeepPartial<StoreSchema> = {} 
    expect(getAuthIsError(state)).toEqual('')
  })

})
