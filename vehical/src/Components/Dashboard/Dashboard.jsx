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
      hours: [
        {
          startTime: "2024-03-27T09:00:00",
          endTime: "2024-03-27T12:00:00"
        },
        {
          startTime: "2024-03-28T10:00:00",
          endTime: "2024-03-28T14:00:00"
        }
      ]
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
      hours: [
        {
          startTime: "2024-03-27T13:00:00",
          endTime: "2024-03-27T16:00:00"
        },
        {
          startTime: "2024-03-28T15:00:00",
          endTime: "2024-03-28T18:00:00"
        }
      ]
    }
  ];
  
 
  
  return (
    <div className="flex flex-row gap-3 p-5">
      {bookingDetails.map((value,index)=>{
        return <Singlecard  name={value.driver.name}
        
        date={"12/09/2004"} form={value.from} to={value.to} startTime={value.hours[index].startTime} 
        endTime={value.hours[index].endTime}  licenseNumber={value.driver.licenseNumber} contact={value.driver.contact}></Singlecard>
      })}
    </div>
  )
}

export default Dashboard
