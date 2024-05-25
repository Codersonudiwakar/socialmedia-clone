import NavbarTop from "./Navbar";
import Post from "./Post";


const Home=()=>{

    return (
<div className="body">
        <div className='head'>
<NavbarTop/>
        </div>
    
        <div className="split-container">
          <div className="left">
            
          </div>
          <div className="middle">
           <Post/>
          </div>
          <div class="right">
          
          </div>
          </div>

    </div>
    );
}
export default Home;