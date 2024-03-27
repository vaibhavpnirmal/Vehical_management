import Sidebar from "./Sidebar"
import Header from './Header'
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (<>
  
  <div className="flex gap-2 p-1 overflow-hidden" ><div>
      <Sidebar></Sidebar>
    </div>
    <div className="flex flex-col border-2 w-full"> 
    <div className="w-full  h-10 bg-green-500 ">
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
