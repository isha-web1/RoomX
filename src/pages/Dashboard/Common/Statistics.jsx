import LoadingSpinner from "../../../components/shared/LoadingSpinner"
import AdminStatistics from "../Admin/AdminStatistics"
import useRole from '../../../hooks/useRole.js'


const Statistics = () => {
  const [role, isLoading] = useRole()
  if (isLoading) return <LoadingSpinner />
  return (
    <>
      {role === 'admin' && <AdminStatistics />}
      {/* {role === 'host' && <HostStatistics />}
      {role === 'guest' && <GuestStatistics />} */}
    </>
  )
}

export default Statistics