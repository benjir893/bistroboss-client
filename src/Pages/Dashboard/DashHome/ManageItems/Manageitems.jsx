import { FaRegEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaDeleteLeft } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Manageitems = () => {
    const [menu, ,refetch] = useMenu();
    const AxiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await AxiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });

    }
    return (
        <div>

            <div className="">
                <SectionTitle heading={'manage items'} subheading={'Hurry up'}></SectionTitle>
            </div>
            <div className=" m-2">
                <h1 className="text-xl, text-blue-900 font-semibold font-robotocondence">Total Available Menu items: {menu?.length}</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th> Image</th>
                                <th>Menu Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item, index) => <tr key={item._id} item={item}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="pic" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <Link to={`/dashboard/updateitem/${item._id}`}><button className="btn btn-ghost btn-xs"><FaRegEdit></FaRegEdit></button></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteItem(item)}  className="btn btn-ghost btn-xs"><FaDeleteLeft></FaDeleteLeft></button>
                                </th>
                            </tr>)}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manageitems;