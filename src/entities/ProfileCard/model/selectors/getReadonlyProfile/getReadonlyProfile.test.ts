import { StoreSchema } from 'app/providers/StoreProvider'
import { ProfileSchema, getReadonlyProfile } from 'entities/ProfileCard'

describe('getReadonlyProfile selector', ()=>{
  it('Check error state', ()=>{
    const state:DeepPartial<StoreSchema> = {
      profile:{
        readonly: true
      }
    } 

    expect(getReadonlyProfile(state as StoreSchema)).toEqual(true)
  })

  it('Check getReadonlyProfile undefined field', ()=>{
    const state:DeepPartial<ProfileSchema> = {
    } 
    expect(getReadonlyProfile(state as StoreSchema)).toEqual(undefined)
  })

})
