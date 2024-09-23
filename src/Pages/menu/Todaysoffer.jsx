import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import useMenu from "../hooks/useMenu";
import Todaysoffercard from "./Todaysoffercard";


const Todaysoffer = () => {
    const [menu] = useMenu();
    const todaysmenu = menu.filter(item => item.category ==='soup')
    // const[menu, setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{setMenu(data)})
    // },[])
    return (
        <div className="md:grid grid-cols-2 gap-4 mt-10 mb-10">
            {
                todaysmenu.map( item =><Todaysoffercard key={item._id} item={item}></Todaysoffercard>)
            }
        </div>
    );
};

export default Todaysoffer;