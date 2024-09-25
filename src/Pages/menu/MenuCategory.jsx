import { Link } from "react-router-dom";
import Menuitem from "./Menuitem";
import Menubanner from "./Menubanner";
import SectionTitle from "../components/SectionTitle";


const MenuCategory = ({ items}) => {
    return (
        <div className="">
           
            <div className="md:grid grid-cols-2 gap-4 mb-10">
                {
                    items.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
                }
               
            </div>
        </div>
    );
};

export default MenuCategory;