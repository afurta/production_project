import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CommentFormSchema } from '../types/CommentFormSliceSchema'

const initialState: CommentFormSchema = {
  text: ''
}

export const CommentFormSlice = createSlice({
  name: 'CommentFormSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(loginByUserName.pending, (state) => {
    //   state.isLoading = true,
    //   state.error = undefined
    // }),
    // builder.addCase(loginByUserName.rejected, (state, action) => {
    //   state.isLoading = false,
    //   state.error = action.payload
    // }),
    // builder.addCase(loginByUserName.fulfilled, (state) => {
    //   state.isLoading = false
    // })
  }
})

export const { reducer: CommentFormReducer } = CommentFormSlice
export const { actions: CommentFormActions } = CommentFormSlice
