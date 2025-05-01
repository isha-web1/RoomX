import Container from '../../components/shared/Navbar/Container'

import RoomReservation from '../../components/RoomDetails/RoomReservation'
import Heading from '../../components/shared/Heading'

import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../components/shared/LoadingSpinner'
import { useParams } from 'react-router-dom'
import useAxiosCommon from '../../hooks/useAxiosCommon'

// single room object (Fake Data)

const RoomDetails = () => {
  const {id} = useParams()
 const axiosCommon = useAxiosCommon()
  

  const {data : roomData ={}, isLoading } = useQuery({
    queryKey : ['room', id],
    queryFn : async () => {
      const {data} = await axiosCommon.get(`/room/${id}`)
      return data
    }

  })

  if (isLoading) return <LoadingSpinner />
  console.log(roomData)
  return (
    <Container>
      
      {roomData && (
        <div className='max-w-screen-lg mx-auto'>
          {/* Header */}
          <div className='flex flex-col gap-6'>
            <div>
              <Heading title={roomData.title} subtitle={roomData.location} />
              <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                  className='object-cover w-full'
                  src={roomData.image}
                  alt='header image'
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            {/* Room Info */}
            <div className='col-span-4 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div
                  className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
                >
                  <div>Hosted by {roomData?.host?.name}</div>

                  <img
                    className='rounded-full'
                    height='30'
                    width='30'
                    alt='Avatar'
                    src={roomData?.host?.image}
                  />
                </div>
                <div
                  className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
                >
                  <div>{roomData?.guests} guests</div>
                  <div>{roomData?.bedrooms} rooms</div>
                  <div>{roomData?.bathrooms} bathrooms</div>
                </div>
              </div>

              <hr />
              <div
                className='
          text-lg font-light text-neutral-500'
              >
                {roomData?.description}
              </div>
              <hr />
            </div>

            <div className='md:col-span-3 order-first md:order-last mb-10'>
              {/* RoomReservation */}
              <RoomReservation room={roomData} />
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default RoomDetails