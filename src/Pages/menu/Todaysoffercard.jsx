import React from 'react';

const Todaysoffercard = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className="md:grid grid-cols-5 border-solid border-b-2">
            <div className="">
                <img className="ml-6 w-16 h-16 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl" src={image} alt="" />
            </div>
            <div className="-ml-4 col-span-3 text-start">
                <h1 className="font-robotocondence text-blue-900 font-semibold">{name}  ------------------</h1>
                <p>{recipe}</p>
            </div>
            <div className="-ml-4">
                <p className="text-orange-300 font-robotocondence">$ {price}</p>
            </div>
        </div>
    );
};

export default Todaysoffercard;