
import Card from './Card'
import Container from '../shared/Navbar/Container'
import Heading from '../shared/Heading'
import LoadingSpinner from '../shared/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import { useSearchParams } from 'react-router-dom'

const Rooms = () => {
  const axiosCommon = useAxiosCommon();
  const [params, setParams] = useSearchParams()
  const category = params.get('category')

  const {data : roomsData =[], isLoading } = useQuery({
    queryKey : ['rooms', category],
    queryFn : async () => {
      const {data} = await axiosCommon.get(`/rooms?category=${category}`)
      return data
    }

  })

  // useEffect(() => {
  //   setLoading(true)
  //   fetch(`./rooms.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setRooms(data)
  //       setLoading(false)
  //     })
  // }, [])

  if (isLoading) return <LoadingSpinner />

  return (
    <Container>
      {roomsData && roomsData.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {roomsData.map(room => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
          <Heading
            center={true}
            title='No Rooms Available In This Category!'
            subtitle='Please Select Other Categories.'
          />
        </div>
      )}
    </Container>
  )
}

export default Rooms