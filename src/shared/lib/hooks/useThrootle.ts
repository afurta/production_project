/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react'

export const useThrottle = (cb: (...args: any[]) => void, delay: number) => {
  const flag = useRef<boolean>(false)

  return useCallback(
    (...args: any[]) => {
      if (!flag.current) {
        cb(...args)
        flag.current = true
        setTimeout(() => (flag.current = false), delay)
      }
    },
    [cb, delay]
  )
}
