import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'

export const fetchCommentsArticleById = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'profile',
  async (articleId, thunkApi) => {
    const {extra, rejectWithValue} = thunkApi

    if (!articleId){
      return rejectWithValue('error')
    }
    
    
    try {
      const response = await extra.api.get<Comment[] >('/comments', {
        params:{
          articleId,
          _expand:'user'
        }
      })
      if (!response.data) throw new Error()
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  })

