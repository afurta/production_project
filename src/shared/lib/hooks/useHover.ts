import { useCallback, useMemo, useState } from 'react'

interface UseHoverBind{
  onMouseLeave: ()=> void
  onMouseEnter: ()=> void
}
type UseHoverResult = [boolean, UseHoverBind]

export const useHover = (): UseHoverResult =>{
  const [isHover, setIsHover] = useState<boolean>(false)

  const onMouseLeave = useCallback(()=>{
    setIsHover(false)
  }, [setIsHover])

  const onMouseEnter = useCallback(()=>{
    setIsHover(true)
  }, [setIsHover])

  return useMemo(()=>[isHover, {onMouseLeave, onMouseEnter,}], [isHover, onMouseEnter, onMouseLeave])
}
