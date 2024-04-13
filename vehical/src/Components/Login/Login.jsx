import  { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './login.css'
import axios from 'axios'


const Login = () => {
  const [value,setvalue]=useState({})
  const navigate = useNavigate();
  const [mail,setmail]=useState('')
  const [pass,setpass]=useState('')
  let [showimage,setshowimage]=useState(false)
  // const handlincrease=()=>{
  //   setvalue((pre)=> {
  //     ...pre,www:123}
  //  )
  // }

  window.localStorage.setItem("email","1234")
  window.localStorage.setItem("pass","1234")

  console.log(localStorage.getItem('email'))

  // useEffect(()=>{
  //   axios.get('http://localhost:3001/categories').then((res)=>{console.log(res.data)})
  // },[])

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
    setshowimage(true);
    
    if((mail==localStorage.getItem('email')) && (pass==1234)){
     
// setShow(true)

console.log(showimage)
 
navigate('/layout')

    }else{
      alert("wrong pass has entered in it")
    }

  }
 
  return (
    <>
    

    <div className='flex flex-col text-center w-screen h-screen absolute'>
    <div className='absolute flex flex-row w-screen justify-center'><h1 className='text-3xl'>Welcome to Car Deal</h1>
      <img src="/assets/cardeal.png" alt="this is image " style={{width:'50px', height:'50px'}}></img>
      </div>
      <div className='w-full absolute mt-14  ' ><img className='moving-image' src='/assets/movingcar2.gif' style={{width:'100px', height:'100px'}}/>
      
      </div>
<hr className=''></hr>
     
    
      <div className='w-100 h-screen flex flex-row justify-center items-center gap-20 bg-gray-100'>
    
  
    
      {/* <div className='w-60 h-72 bg-green-500 ' >

        <h3>Register Here </h3>
<div className='flex flex-col text-center p-5'> <label htmlFor='name'>Name</label>
        <input name="name" className=' border-2'></input>
        <label htmlFor='surname'>Surname</label>
        <input name="surname"className=' border-2' ></input>
        <label htmlFor='email'>Email</label>
        <input name="email"className=' border-2' ></input>
        <label htmlFor='pass'>create password</label>
        <input name="pass"className=' border-2' ></input>
        <button className='bg-blue-500'>Signup</button>
        
        
        
        </div>
       
        


        
        
        </div> */}
        
        {/* <div className='w-1 h-80 bg-slate-500 text-7xl flex justify-center items-center'> OR</div> */}
      
      
       <div className='w-60 flex flex-col justify-center text-center bg-yellow-300'>
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
  {/* <h1>{value}</h1>
  <button onClick={handlincrease}>increase</button> */}
    </div>
    
    </div>
    
    </>
    
    
    
    
    
   
  )
}

export default Login