import React from 'react'

const Singlecard = ({date,form,to,startTime,endTime,name,licenseNumber,contact}) => {
  return (
    <div className='w-4/12 bg-zinc-200 h-60 '>
        <div className='w-12/12 '>
            {date} 
        </div>
      <div className=''>
{form} to {to}<br/>
{startTime}
<br/>
{endTime}

      </div>

<div>
    {name}
    {licenseNumber}
    {contact}
</div>


      </div>

  )
}

export default Singlecard
