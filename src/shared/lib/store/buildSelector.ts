/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreSchema } from '@/app/providers/StoreProvider'
import { useSelector } from 'react-redux'

type Selector<T, Args extends any[]> = (state: StoreSchema, ...args: Args) => T
type Hook<T, Args extends any[]> = (...args: Args) => T
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>]

export const buildSelector = <T, Args extends any[]>(
  selector: Selector<T, Args>
): Result<T, Args> => {
  const useSelectorHook: Hook<T, Args> = (...args: Args) => {
    return useSelector((state: StoreSchema) => selector(state, ...args))
  }

  return [useSelectorHook, selector]
}
