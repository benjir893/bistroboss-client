import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Menuitem from "./Menuitem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data =>{
            const popularMenu = data.filter(item =>item.category === 'popular');
            setMenu(popularMenu);
        })
    },[])
    return (
        <div>
            <div className="">
                <SectionTitle
                subheading={"check it out"} heading={"from our menu"}></SectionTitle>
            </div>
            <div className="md:grid grid-cols-2 gap-4 mb-10">
                {
                    menu.map(item =><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;