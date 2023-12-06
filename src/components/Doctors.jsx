import React, { useState, useEffect } from 'react';
import AddModal from './AddModal';
import AppointmentList from './AppointmentList';
import { doctorData,appointmentData } from '../helpers/data';

const Doctors = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  useEffect(() => {
  }, [appointments]);

  return (
    <div className="Doctors">
      <div className="modalContainer">
        {doctorData.map((doctor,index)=>(
          <AddModal {...doctor} appointments={appointments} setAppointments={setAppointments} key={index} />
        ))}
      </div>
      <div className="appointmentList">
        {appointments.map((item,index)=>(
          <AppointmentList {...item} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
