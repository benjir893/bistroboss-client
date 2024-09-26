import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Nav/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Register from "../Pages/Register/Register";


const Main = () => {

    // const noheaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register');

    return (
        <div>
            {/* {noheaderFooter || <Navbar></Navbar>} */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* {noheaderFooter || <Footer></Footer>} */}

        </div>
    );
};

export default Main;