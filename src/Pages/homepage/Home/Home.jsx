import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Nav/Navbar";
import Herobanner from "../banner/Herobanner";
import Category from "../Category/Category";
import Singlepic from "../banner/Singlepic";
import PopularMenu from "../../PopulaMenu/PopularMenu";
import Featured from "../../components/Featured";
import Testimonials from "../../testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <div className="">
                <HelmetProvider><title>BBs:Home</title></HelmetProvider>
            </div>
            <div className="">
                <Navbar></Navbar>
                <Herobanner></Herobanner>
                <Category></Category>
                <Singlepic></Singlepic>
                <PopularMenu></PopularMenu>
                <Featured></Featured>
                <Testimonials></Testimonials>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;