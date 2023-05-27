import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useSelector } from 'react-redux'
import { Navigate, } from 'react-router-dom'
import { AppRoutes } from 'shared/config/routeConfig/RouterConfig'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector(getUserAuthData)

  if (!auth) {
    return <Navigate to={AppRoutes.MAIN} replace />
  }

  return children
}
