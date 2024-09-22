import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Nav/Navbar";
import Footer from "../Shared/Footer/Footer";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BBs|menu</title>
            </Helmet>
            <Navbar></Navbar>
            <h1>This is our menu page</h1>
            <Footer></Footer>
        </div>
    );
};

export default Menu;