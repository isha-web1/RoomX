import React, { useState } from 'react';
import AddRoomForm from '../../../components/Form/AddRoomForm';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const AddRoom = () => {
    const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  //Date range handler
  const handleDates = item => {
    setDates(item.selection)
  }
    return (
        <div>
            {/*add room form  */}
            <AddRoomForm
             dates={dates}
             handleDates={handleDates}
            />
        </div>
    );
};

export default AddRoom;