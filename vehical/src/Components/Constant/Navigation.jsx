import { MdDashboard } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineBedroomParent } from "react-icons/md";

export const SIDEBAR_LINKS = [
    {
        label: "Booked",
        key: "dashboard",
        path: "dashboard",
        icon: <MdDashboard></MdDashboard>
    },
    {
        label: "Vehicle Management",
        key: "vehicle-management",
        path: "vehicle-management",
        icon:<FaCarAlt></FaCarAlt>
    },
    {
        label: "Driver Management",
        key: "driver-management",
        path: "driver-management",
        icon: <CgProfile></CgProfile>
    },
    {
        label: "Rent Car",
        key: "rent-car",
        path: "rent-car",
        icon: <MdOutlineBedroomParent></MdOutlineBedroomParent>
    }
]