import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Singlevehical from './Singlevehical'
import { useDispatch, useSelector } from 'react-redux'
const Vehicalmanagement = () => {
  
  const cars=useSelector((state)=>state.vehicle.data)
  console.log(cars)
  // let [data,setdata]=useState([])
  // setdata(...cars)
  // console.log(data)
  const navigate=useNavigate()
  return (<>
  <div>
    <button className='bg-pink-500 rounded-lg mt-2' onClick={()=>navigate('layout/addvehical')}>Add Vehical </button>
  </div>
  <div className='grid grid-cols-3 gap-4 pt-5'>
     {cars.map((value)=>{
      return <Singlevehical {...value}></Singlevehical>
     })}
      
    </div></>
    
  )
}

export default Vehicalmanagement
