import { ReactNode, createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationProps {
  children: ReactNode
}

interface AnimationContext {
  isLoaded?: boolean
  Spring?: SpringType
  Gesture?: GestureType
}

const AnimationContext = createContext<AnimationContext>({})

const getAsyncAnimationModules = () => {
  return Promise.all([import('@react-spring/web'), import('@use-gesture/react')])
}

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContext>
}

export const AnimationProvider = ({ children }: AnimationProps) => {
  let SpringRef = useRef<SpringType>()
  let GestureRef = useRef<GestureType>()
  let [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    getAsyncAnimationModules()
      .then(([Spring, Gesture]) => {
        SpringRef.current = Spring
        GestureRef.current = Gesture
        setIsLoaded(true)
      })
  })

  const value = useMemo(() => ({
    Gesture: GestureRef.current,
    Spring: SpringRef.current,
    isLoaded,
  }), [isLoaded])


  return (
    <AnimationContext.Provider value={value} >
      {children}
    </AnimationContext.Provider>
  )
}
