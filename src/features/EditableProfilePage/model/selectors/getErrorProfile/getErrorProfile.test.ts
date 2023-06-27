import { StoreSchema } from 'app/providers/StoreProvider'
import { ProfileSchema } from 'features/EditableProfilePage'
import { getErrorProfile } from './getErrorProfile'

describe('getErrorProfile selector', ()=>{
  it('Check error state', ()=>{
    const state:DeepPartial<StoreSchema> = {
      profile:{
        error: 'error'
      }
    } 

    expect(getErrorProfile(state as StoreSchema)).toEqual('error')
  })

  it('Check getErrorProfile undefined field', ()=>{
    const state:DeepPartial<ProfileSchema> = {
    } 
    expect(getErrorProfile(state as StoreSchema)).toEqual(undefined)
  })

})
