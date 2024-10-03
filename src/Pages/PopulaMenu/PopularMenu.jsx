import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Menuitem from "../menu/Menuitem";
import { Link } from "react-router-dom";
import useMenu from "../hooks/useMenu";


const PopularMenu = () => {
    // using hook. name of the hook is useMenu
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res =>res.json())
    //     .then(data =>{
    //         const popularMenu = data.filter(item =>item.category === 'popular');
    //         setMenu(popularMenu);
    //     })
    // },[])
    return (
        <div>
            <div className="">
                <SectionTitle
                    subheading={"check it out"} heading={"from our menu"}></SectionTitle>
            </div>
            <div className="md:grid grid-cols-2 gap-4 mb-10">
                {
                    popularMenu.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            <div className="text-center">
                <Link to={'/order/salad'}><button className="text-blue-900 font-robotocondence font-semibold border-b-2 border-orange-600">View Full Menu</button></Link>
            </div>
        </div>
    );
};

export default PopularMenu;