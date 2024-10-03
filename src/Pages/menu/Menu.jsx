import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Nav/Navbar";
import Footer from "../Shared/Footer/Footer";
import Menubanner from "./Menubanner";
import SectionTitle from '../components/SectionTitle'
import banner3 from '../../assets/menu/banner3.jpg';
import dissert from '../../assets/menu/dessert-bg.jpeg';
import pizzabanner from '../../assets/menu/pizza-bg.jpg';
import saladbanner from '../../assets/menu/salad-bg.jpg';
import soupbanner from '../../assets/menu/soup-bg.jpg';
import Todaysoffer from "./Todaysoffer";
import useMenu from "../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import { Link } from "react-router-dom";




const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>BBs|menu</title>
            </Helmet>
            
            <Menubanner img={banner3} heading={"our menu"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>

            <div className="text-center">
                <SectionTitle heading={"today's offers"} subheading={"---Don't miss---"}></SectionTitle>
                <MenuCategory items={offered}>
                </MenuCategory>
                    <Link to={offered && '/order/offered'}><button className="text-blue-950 font-robotocondence font-semibold uppercase p-2 my-10 border-solid border-b-4 border-blue-950 rounded-xl">order your favorite food</button></Link>
            </div>

            <div className=" text-center my-10">
                <Menubanner img={dissert} heading={"disserts"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>
                <div className="my-12">
                    <MenuCategory items={dessert} heading={"Desserts"} img={dissert} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></MenuCategory>
                    <Link to={'/order/dessert'}><button className="text-blue-950 font-robotocondence font-semibold uppercase p-2 my-10 border-solid border-b-4 border-blue-950 rounded-xl">order your favorite food</button></Link>
                </div>
            </div>

            <div className=" text-center my-10">
                <Menubanner img={pizzabanner} heading={"pizza"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>
                <div className="my-10">
                    <MenuCategory items={pizza}></MenuCategory>
                    <Link to={pizza && '/order/pizza'}><button className="text-blue-950 font-robotocondence font-semibold uppercase p-2 my-10 border-solid border-b-4 border-blue-950 rounded-xl">order your favorite food</button></Link>
                </div>
            </div>
            <div className="text-center my-10">
                <Menubanner img={saladbanner} heading={"salad"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>
                <div className="my-10">
                    <MenuCategory items={salad}></MenuCategory>
                    <Link to={salad &&'/order/salad'}><button className="text-blue-950 font-robotocondence font-semibold uppercase p-2 my-10 border-solid border-b-4 border-blue-950 rounded-xl">order your favorite food</button></Link>
                </div>
            </div>


            <div className="text-center my-10">
                <Menubanner img={soupbanner} heading={"soup"} paragraph={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, provident nam quod non illo corporis voluptatibus ipsa ullam omnis, dolore obcaecati commodi consequatur aspernatur magnam repellat reiciendis odit quidem vitae."}></Menubanner>
                <div className="my-10">
                    <MenuCategory items={soup}></MenuCategory>
                    <Link to={soup && '/order/soup'}><button className="text-blue-950 font-robotocondence font-semibold uppercase p-2 my-10 border-solid border-b-4 border-blue-950 rounded-xl">order your favorite food</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Menu;