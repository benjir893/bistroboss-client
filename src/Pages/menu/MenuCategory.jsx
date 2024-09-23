import Menuitem from "./Menuitem";


const MenuCategory = ({items}) => {
    return (
        <div className="md:grid grid-cols-2 gap-4 mb-10">
            {
                items.map(item =><Menuitem key={item._id} item={item}></Menuitem>)
            }
        </div>
    );
};

export default MenuCategory;