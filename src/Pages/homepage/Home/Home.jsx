import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Nav/Navbar";
import Herobanner from "../banner/Herobanner";
import Category from "../Category/Category";
import Singlepic from "../banner/Singlepic";
import PopularMenu from "../../PopulaMenu/PopularMenu";
import Featured from "../../components/Featured";
import Testimonials from "../../testimonials/Testimonials";
import Contact from "../banner/Contact";
import ChefRecomend from "../../chefrecomend/ChefRecomend";


const Home = () => {
    return (
        <div>
            <Helmet><title>BBs|Home</title></Helmet>
            <div className="">              
                <Herobanner></Herobanner>
                <Category></Category>
                <Singlepic header={"bistro boss"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eos fuga! Sed, eveniet nesciunt labore nihil dolore quia eum rem molestiae culpa magnam ex iusto consectetur aliquid? Eligendi, hic asperiores!"}></Singlepic>
                <Contact></Contact>
                <ChefRecomend></ChefRecomend>
                <PopularMenu></PopularMenu>
                <Featured></Featured>
                <Testimonials></Testimonials>
                
            </div>
        </div>
    );
};

export default Home;