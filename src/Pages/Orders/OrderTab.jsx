import FoodCard from "../components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className="md:grid grid-cols-3 gap-4 mb-10">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;