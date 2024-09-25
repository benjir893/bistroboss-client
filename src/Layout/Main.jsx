import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Nav/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Register from "../Pages/Register/Register";


const Main = () => {
 
    // const noheaderFooterlogin = location.pathname.includes('/login');
    // const noheaderfooterregister = location.pathname.includes('/register')
    return (
        <div>
            {/* {noheaderFooterlogin || <Navbar></Navbar>}
            {noheaderfooterregister || <Navbar></Navbar>} */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* {noheaderfooterregister || <Footer></Footer>}
            {noheaderFooterlogin || <Footer></Footer>} */}
        </div>
    );
};

export default Main;