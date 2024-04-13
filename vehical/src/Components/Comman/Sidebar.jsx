
import { SIDEBAR_LINKS } from "../Constant/Navigation"
import { useNavigate } from "react-router-dom"
const Sidebar = () => {

    const navigate=useNavigate()


const handleclick=()=>{

    navigate(SIDEBAR_LINKS.path)

}


  return (
    <div className="flex flex-col bg-white w-12/12 h-screen ">
      <div className="h-40 w-full w-12/12    ">
        <img src="/assets/cardeal.png" alt="this is image "></img>
      </div>
      {SIDEBAR_LINKS.map((value)=>{
        return <div className="w-12/12 flex h-10 gap-5 border-2 border-black-300 hover:cursor-pointer hover:bg-sky-700  " key={value.key} onClick={()=>{ navigate(value.path)}}>
        <h2 className=" w-12/12 hover:text-red-300 text-2xl">{value.icon}</h2><h2> {value.label}</h2>

        </div>
      })}
    </div>
  )
}




export default Sidebar
