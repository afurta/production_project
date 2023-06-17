import { createSelector } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider'

export const getScrollObject = (store: StoreSchema) => store.SaveScroll

export const getScrollValueByPath = createSelector(
  getScrollObject,
  (store: StoreSchema, path:string)=> path,
  (scroll, path)=> scroll[path] || 0 
)

