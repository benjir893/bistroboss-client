

const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;

    return (
        <div className="my-4">
            <div className="card bg-base-100 shadow-xl h-full">
                <figure>
                    <img
                        src={image}
                        alt="image" />
                </figure>
                <p className="absolute bg-slate-700 bg-opacity-50 right-8 top-1 p-1 rounded-lg text-white font-robotocondence font-semibold text-left">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Ingradients: {recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary font-robotocondence font-semibold bg-lime-500 hover:bg-lime-300 uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;