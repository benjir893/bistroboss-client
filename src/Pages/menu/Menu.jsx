import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Nav/Navbar";
import Footer from "../Shared/Footer/Footer";
import Menubanner from "./Menubanner";
import banner3 from '../../assets/menu/banner3.jpg';
import dissert from '../../assets/menu/dessert-bg.jpeg';
import pizza from '../../assets/menu/pizza-bg.jpg';
import salad from '../../assets/menu/salad-bg.jpg';
import soup from '../../assets/menu/soup-bg.jpg';
import SectionTitle from "../components/SectionTitle";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BBs|menu</title>
            </Helmet>
            <Navbar></Navbar>
            <Menubanner img={banner3} heading={"our menu"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>

            <div className="my-10">
                <SectionTitle heading={"today's offer"} subheading={"----don't miss----"}></SectionTitle>
            </div>
            <div className="my-10">
                <Menubanner img={dissert} heading={"disserts"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>
            </div>
            <div className="my-10">
                <Menubanner img={pizza} heading={"pizza"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>
            </div>
            <div className="my-10">
                <Menubanner img={salad} heading={"pizza"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>
            </div>
            <div className="my-10">
                <Menubanner img={soup} heading={"pizza"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Menu;