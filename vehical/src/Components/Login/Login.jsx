import  { useState } from 'react'
import {  useNavigate } from 'react-router-dom'



const Login = ({setShow}) => {
  const navigate = useNavigate();
  const [mail,setmail]=useState('')
  const [pass,setpass]=useState('')


  const handlechange=(e)=>{
  
  if(e.target.name==="email"){
    let mail=e.target.value
    setmail(mail)
    console.log(mail)
  }

  if(e.target.name==='password'){
    let pass=e.target.value
    setpass(pass)
    console.log(pass)
  }

  }

  const handleclick=()=>{
    
    if((mail==1234) && (pass==1234)){
     
setShow(true)
navigate('/')

    }else{
      alert("wrong pass has entered in it")
    }

  }
 
  return (
    <div className='w-100 h-screen flex justify-center items-center'> <div className='w-60 flex flex-col justify-center text-center bg-yellow-300'>
      <h4 className='text-blue-900'>Login Here</h4>
      <div className='flex p-5 flex-col '> 
      
        <label htmlFor='email'>Email</label>
       <input className='border-2' onChange={handlechange} name="email" type='email'></input>

       <label htmlFor='password'>Password</label>
        <input name='password'onChange={handlechange} className='border-2' type='password'></input>  </div>
        <div className='flex justify-evenly'>
          <input type='checkbox'/>
          <label>Remember</label>
          <label className='text-green-900'>ForgotPassword</label>
          
        </div>
          <button className='m-5 w-52 border-2 bg-blue-950 text-white ' onClick={handleclick} >Login</button>
    </div>
    {/* <Routes><Route path='/Dashboard/*' Component={Sidebar}></Route></Routes> */}
    
    </div>
   
  )
}

export default Login