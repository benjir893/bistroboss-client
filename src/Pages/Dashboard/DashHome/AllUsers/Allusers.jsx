
import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserSecret } from "react-icons/fa";
import Swal from "sweetalert2";


const Allusers = () => {
    const AxiosSecure = useAxiosSecure()
    //data fetching from database using tan stack query instead useEfect
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await AxiosSecure.get('/user')
            return res.data;
        }
    })
    const handleAdminrole = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to assigned ${user.name} as an Admin?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I do!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.patch(`/user/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Updated!",
                                text: `${user.name} has been assigned as an Admin`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!" ,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I do!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.delete(`/user/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
    const userIcon = <FaUserSecret />;
    return (
        <div>
            <SectionTitle subheading={'---users---'} heading={'Manage All Users'}></SectionTitle>
            <div className="md:flex justify-evenly mt-6 mb-10">
                <h1 className="text-2xl font-robotocondence">All Users</h1>
                <h1 className="text-2xl font-robotocondence">Total Users: {users?.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="pic" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleAdminrole(user)} className="btn btn-ghost btn-xs text-2xl text-red-500">{userIcon}</button>}
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs text-2xl text-red-500"><MdDeleteForever /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;