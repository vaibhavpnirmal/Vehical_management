import Singlecard from "./Singlecard";


const Dashboard = () => {

  const bookingDetails = [
    {

     
      car: {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        color: "Black"
      },
      driver: {
        name: "John Doe",
        licenseNumber: "ABC123456",
        contact: "+1234567890"
      },
      from: "New York",
      to: "Los Angeles",
      day:"22",
      month:"Mar",
      hours: 
        {
          startTime: "22 Mar AT 10:00 AM ",
          endTime: "25 Mar AT 9:00 PM"
        }
       
      
    },
    {
      car: {
        make: "Honda",
        model: "Accord",
        year: 2019,
        color: "White"
      },
      driver: {
        name: "Jane Smith",
        licenseNumber: "DEF654321",
        contact: "+9876543210"
      },
      from: "Los Angeles",
      to: "San Francisco",
      day:"18",
      month:"Apr",
      hours: 
        {
          startTime: "18 Apr AT 12:00 PM",
          endTime: "20 Apr AT 6:00 AM"
        }
       
      
    }
  ];
  
 
  
  return (
    <div className="flex flex-row gap-3 pt-2">
      {bookingDetails.map((value,index)=>{
        return <Singlecard  name={value.driver.name}
        
        form={value.from} to={value.to} startTime={value.hours.startTime} 
        endTime={value.hours.endTime}  licenseNumber={value.driver.licenseNumber} contact={value.driver.contact} day={value.day} month={value.month}></Singlecard>
      })}
    </div>
  )
}

export default Dashboard
