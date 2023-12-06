const AppointmentList = ({id, patient, day,  consulted, doctor}) => {
  // 'day' objesini string'e çevir
  const formattedDay = day.toLocaleDateString();
  const formattedTime = day.toLocaleTimeString();

  return (
    <div index={id}>
      <span> {patient}</span>
      <span> {formattedDay}</span> 
      <span> {formattedTime}</span>
      <span> {consulted ? 'CONSULTED' : ''}</span> 
      <span> {doctor}</span>
    </div>
  )
}

export default AppointmentList;
