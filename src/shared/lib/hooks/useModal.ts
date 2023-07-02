import { useCallback, useEffect, useRef, useState } from 'react'

interface useModalProps{
  delay?: number
  isOpen: boolean
  onClose: ()=> void
  isLazy?: boolean
}
export const useModal = ({delay = 300, isOpen, onClose, isLazy}:useModalProps)=>{

  const [isClosing, setIsClosing] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, delay)
    }
  }, [onClose, delay])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
    }
  }, [close])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }

  }, [isOpen, onKeyDown])

  useEffect(() => {
    if (isOpen) setIsMounted(true)
  }, [isOpen])


  return {
    close, isClosing, isMounted
  }
}
