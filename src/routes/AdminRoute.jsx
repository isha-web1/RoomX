import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import LoadingSpinner from '../components/shared/LoadingSpinner'


const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute


