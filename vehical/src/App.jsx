import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import { BrowserRouter } from 'react-router-dom'
// import Sidebar from './Components/Comman/Sidebar'
import Layout from './Components/Comman/Layout'
import Header from './Components/Comman/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Vehicalmanagement from './Components/Vehical/Vehicalmanagement'
import Rentcar from './Components/Rentcar'
import Drivermanagement from './Components/Drivermanagement'
import Addvehicle from './Components/Vehical/Addvehicle'


function App() {
  const [show,setShow]=React.useState(true)

  return (
    <>
   
     <Routes>

      <Route path='/' element={<Login setShow={setShow}></Login>}></Route>
     {show && <Route path='layout/*' element={<Layout></Layout>}>
     <Route path='layout/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='vehicle-management' element={<Vehicalmanagement></Vehicalmanagement>}></Route> 
      <Route path='layout/addvehical' element={<Addvehicle></Addvehicle>}></Route>
      <Route path='rent-car' element={<Rentcar></Rentcar>}></Route>
      <Route path='driver-management' element={<Drivermanagement></Drivermanagement>}></Route>
       </Route>}

    

     </Routes>
    
    
      
    </>
  )
}

export default App
