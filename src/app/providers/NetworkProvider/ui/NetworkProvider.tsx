import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

interface INetworkStatus {
  online: boolean
}
interface INetworkStatusContextProvider {
  children: ReactNode
}

const networkStatus = createContext<INetworkStatus>({
  online: true
})

export const useNetworkStatusContext = (): INetworkStatus =>
  useContext<INetworkStatus>(networkStatus)

export const NetworkStatusContextProvider = (
  props: INetworkStatusContextProvider
) => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true))
    window.addEventListener('offline', () => setIsOnline(false))
  }, [])

  return (
    <networkStatus.Provider value={{ online: isOnline }}>
      {props.children}
    </networkStatus.Provider>
  )
}
