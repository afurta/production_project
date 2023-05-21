import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider'
import axios, { AxiosStatic } from 'axios'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

type ActionCreaterType<Return, Arg, RejectedValue> = (arg:Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

export class TestAsyncThunk<Return, Arg, RejectedValue>{
  dispatch:jest.MockedFn<any>
  getState:() => StoreSchema
  actionCreator: ActionCreaterType<Return, Arg, RejectedValue>

  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<any>

  constructor (actionCreator: ActionCreaterType<Return, Arg, RejectedValue>){
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState  = jest.fn()

    this.api  = mockedAxios
    this.navigate  = jest.fn()
  }
  async callThunk (arg:Arg){
    const action = this.actionCreator(arg)
    const result = await action(
      this.dispatch, 
      this.getState, 
      { api: this.api, navigate: this.navigate}
    )

    return result
  }
}