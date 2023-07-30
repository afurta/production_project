import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SaveScrollSchema } from '../../model/types/SaveScrollSchema'

const initialState: SaveScrollSchema = {}

export const SaveScrollSlice = createSlice({
  name: 'SaveScrollSlice',
  initialState,
  reducers: {
    setScroollPosition: (
      state,
      action: PayloadAction<{ path: string, position: number }>
    ) => {
      state[action.payload.path] = action.payload.position
    }
  }
})

export const { actions: SaveScrollActions } = SaveScrollSlice
export const { reducer: SaveScrollReducer } = SaveScrollSlice
