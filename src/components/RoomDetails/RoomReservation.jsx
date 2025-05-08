import { useState } from "react";
import Button from "../shared/Button/Button";
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { differenceInCalendarDays } from 'date-fns'
import useAuth from "../../hooks/useAuth";
import BookingModal from "../Modal/BookingModal";

const RoomReservation = ({ room, refetch }) => {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(room.from),
      endDate: new Date(room.to),
      key: 'selection',
    },
  ])

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleSelect = (ranges) => {
    setState([ranges.selection]);
  };

   // total days * price
   const totalPrice =
   parseInt(differenceInCalendarDays(new Date(room.to), new Date(room.from))) *
   room?.price
 console.log(totalPrice)
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">/night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        {/* Calender */}
        <DateRange
          showDateDisplay={false}
          rangeColors={['#0D98BA']}
          onChange={item => {
            console.log(item)
            setState([
              {
                startDate: new Date(room.from),
                endDate: new Date(room.to),
                key: 'selection',
              },
            ])
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
        
      </div>
      <hr />
      <div className="p-4">
      <Button onClick={() => setIsOpen(true)} label={'Reserve'} />
      </div>
       {/* Modal */}
       <BookingModal
       refetch={refetch}
        isOpen={isOpen}
        closeModal={closeModal}
        bookingInfo={{
          ...room,
          price: totalPrice,
          guest: { name: user?.displayName,
          email: user?.email ,
          image: user?.photoURL 
           },
        }}
      />
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
