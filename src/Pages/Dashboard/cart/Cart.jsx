import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { MdDeleteForever } from "react-icons/md";


const Cart = () => {
    const [cart, refetch] = useCart();
    
    /**========================= 
     * basic reduce structure to get total
     *  const numbers =[1,2,3,4,5,6,7,8,9]
    const sum = numbers.reduce((accumolator, currentvalue)=>{
        return accumolator+currentvalue;
    },0)
    console.log(sum)
    ====================*/
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price
    }, 0)

    const axiosSecure = useAxiosSecure();

    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                .then(res =>{
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                    }
                })
            
            }
          });
    }

    return (
        <div>
            <SectionTitle heading={'wanna add more.!'} subheading={'---my cart---'}></SectionTitle>
            <div className="md:flex justify-evenly items-center gap-4">
                <h1 className="text-2xl font-robotocondence font-semibold text-orange-500 p-4">Total Orders: {cart?.length}</h1>
                <h1 className="text-2xl font-robotocondence font-semibold text-orange-500 p-4">Total Price: ${totalPrice}</h1>
                <button className="btn btn-outline text-xl font-robotocondence font-semibold text-orange-500 ">Pay Now</button>
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id} item={item}>
                                    <td>{index +1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{item.name}</div>
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs text-2xl text-red-500"><MdDeleteForever /></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;