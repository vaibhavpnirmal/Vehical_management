import React, { useEffect } from 'react'
import { useRef } from 'react'
import  {addvehicle} from '../Redux/slices/vehicleSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Addvehicle = () => {
  const navigate=useNavigate()
  const refcon=useRef({})

const dispatch=useDispatch()
const handleclick=()=>{

  dispatch(addvehicle({
    model:refcon.current.model.value,
    engine:refcon.current.engine.value,
    picture:refcon.current.image1.value

 
  }))
  
navigate('/vehicle-management')


}
  return (
    <div className='mt-5 w-full h-full flex justify-center items-center'>
      <div className='w-60 h-60 flex flex-col text-black'>
<label htmlFor='model'>Model name</label>
<input name="model" ref={(el)=>{refcon.current.model=el}} ></input>
<label htmlFor='engine'>engine hp</label>
<input name="engine" ref={(el)=>{refcon.current.engine=el}} ></input>
<label htmlFor='image1'>image_url</label>
<input name="image1" ref={(el)=>{refcon.current.image1=el}} ></input>
<button className='bg-blue-500 mt-5' onClick={handleclick}>Add</button>

      </div>

     
    </div>
  )
}

export default Addvehicle
