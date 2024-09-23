import { Helmet } from "react-helmet-async";
import useMenu from "../hooks/useMenu";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Nav/Navbar";
import Menubanner from "../menu/Menubanner";
import bannerImg2 from '../../assets/shop/banner2.jpg';


const Orders = () => {
    const [menu] = useMenu();

    return (
        <div>
            <Helmet>
                <title>BBs|ourshop</title>
            </Helmet>
            <Navbar></Navbar>
            <Menubanner img={bannerImg2} heading={"our shop"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."} ></Menubanner>
            <Footer></Footer>
        </div>
    );
};

export default Orders;