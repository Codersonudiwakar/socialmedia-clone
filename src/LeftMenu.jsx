import NavbarTop from "./Navbar";
import Post from "./Post";
import Card from 'react-bootstrap/Card';
import { FaHome } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrGroup } from "react-icons/gr";

             






const Leftmenu=()=>{

    return (
<div className="Leftmenu">
        
        <div className="sidebar">
      <ul>
        <li><a href="#home"><FaHome />   Home</a></li>
        <li><a href="#services"><CiCirclePlus />   Services</a></li>
        <li><a href="#clients"><IoMdNotificationsOutline />   Notification</a></li>
        <li><a href="#contact"><IoSettingsOutline /> Setting</a></li>
        <li><a href="#contact"><GrGroup />  Your Network</a></li>
        <li><a href="#contact"><IoSettingsOutline />  Setting</a></li>
      </ul>
    </div>
        
    </div>
    );
}
export default Leftmenu;