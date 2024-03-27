import React from 'react'

const Drivermanagement = () => {
    const driversDetails = [
        {
          name: "John Doe",
          licenseNumber: "ABC123456",
          contact: "+1234567890"
        },
        {
          name: "Jane Smith",
          licenseNumber: "XYZ789012",
          contact: "+9876543210"
        },
        {
          name: "Michael Johnson",
          licenseNumber: "DEF456789",
          contact: "+1122334455"
        },
        {
          name: "Emily Davis",
          licenseNumber: "GHI987654",
          contact: "+9988776655"
        },
        {
          name: "Chris Brown",
          licenseNumber: "JKL321654",
          contact: "+3344556677"
        },
        {
          name: "Amanda Wilson",
          licenseNumber: "MNO654321",
          contact: "+6677889900"
        },
        {
          name: "David Lee",
          licenseNumber: "PQR987654",
          contact: "+5544332211"
        },
        {
          name: "Sarah Garcia",
          licenseNumber: "STU456789",
          contact: "+7799885544"
        },
        {
          name: "Kevin Martinez",
          licenseNumber: "VWX123456",
          contact: "+9988775544"
        },
        {
          name: "Michelle Nguyen",
          licenseNumber: "YZA789012",
          contact: "+1122335544"
        }
      ];
  return (
    <table className='text-center'>
        <thead>
            <tr>
                <th>Name</th>
                <th>licenseNumber</th>
                <th>contact</th>
                </tr>
             </thead>

    

    <tbody>
       {driversDetails.map((value)=>{

return <tr><td>
    {value.name}
    </td>
    <td>
    {value.licenseNumber}
    </td>
    {value.contact}
    </tr>

       })}
      
    </tbody>
    </table>
  )
}

export default Drivermanagement
