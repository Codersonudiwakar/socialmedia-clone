import Leftmenu from "./LeftMenu";
import LeftSideBar from "./LeftSideBar";
import NavbarTop from "./Navbar";
import Post from "./Post";
import Profile from "./Profile";


const Home=()=>{

    return (
<div className="body">
        <div className='head'>
<NavbarTop/>
        </div>
    
        <div className="split-container">
          <div className="left">
            <LeftSideBar/>
          </div>
          <div className="middle">
           <Profile/>
          </div>
          <div class="right">
          
          </div>
          </div>

    </div>
    );
}
export default Home;