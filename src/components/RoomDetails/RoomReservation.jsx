import { useState } from "react";
import Button from "../shared/Button/Button";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

const RoomReservation = ({ room }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setState([ranges.selection]);
  };

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        {/* Calender */}
        <DateRangePicker
          showDateDisplay={false}
          onChange={item => setState([item.selection])}
          ranges={state}
          moveRangeOnFirstSelection={false}
          rangeColors={["#3b82f6"]}
          editableDateInputs={true}
          className="w-full"
        />
        
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${room?.price}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
