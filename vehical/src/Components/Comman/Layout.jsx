import Sidebar from "./Sidebar"
import Header from './Header'
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (<>
  
  <div className="flex gap-2  overflow-hidden bg-blue-900" ><div>
      <Sidebar></Sidebar>
    </div>
    <div className="flex flex-col  w-full"> 
    <div className="w-full  h-20 bg-white">
<Header></Header>
    </div>
<Outlet></Outlet>
    <div></div>
   

    </div>
    </div>
  
    </>
    
  )
}

export default Layout
