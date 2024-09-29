import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { _id ,name, image, recipe, price } = item;
    const location = useLocation()
    const { user } = useAuth();
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const[, refetch] = useCart()

    const handleAddToCart = () => {
        
        // console.log(user.email)
        // console.log(user.displayName)
        // console.log(food)
        if (user && user.email) {
        //    send data to cart in cartcollection
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/cart', cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} has been added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })

        }
        else {

            Swal.fire({
                title: "Please Log in",
                text: "Log into your account to add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, want to login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                    navigate('/login', {state:{from: location}})
                }
            });
        }
    }

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
                        <button onClick={handleAddToCart}
                            className="btn btn-primary font-robotocondence font-semibold bg-lime-500 hover:bg-lime-300 uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;