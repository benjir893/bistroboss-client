import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const Todaysoffer = () => {
    const[menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{setMenu(data)})
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Todaysoffer;