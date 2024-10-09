import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_imagehosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const ItemForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const Axiospublic = useAxiosPublic();
    const AxiosSecure = useAxiosSecure();
    const onSubmit = async(data) => {
        console.log(data)
        // image upload in imgbb and get an url
        const imagefile = {image: data.image[0]}
        const res = await Axiospublic.post(image_hosting_api, imagefile, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const menuItem ={
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image:res.data.data.display_url
            }
            const menures = await AxiosSecure.post('/menu', menuItem);
            console.log(menures.data)
            if(menures.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been added to menu list`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
        // console.log(res.data)
    }
    return (
        <div className="w-full h-full">
            <form className="w-full h-full bg-base-100 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control flex flex-col items-center my-4">
                    <label>Receipe Name</label>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Type here price"
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="">
                    <div className="form-control  flex flex-col items-center my-4">
                        <label>Item Select</label>
                        <select defaultValue={'default'} {...register("category", { required: true })} className="select w-full max-w-xs">
                            <option disabled value={'default'}>Select Item from below</option>
                            <option value={'salad'}>Salad</option>
                            <option value={'pizza'}>Pizza</option>
                            <option value={'soup'}>Soup</option>
                            <option value={'dessert'}>Dessert</option>
                            <option value={'drinks'}>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control  flex flex-col items-center my-4">
                        <label>Item Price</label>
                        <input
                            {...register("price", { required: true })}
                            type="text"
                            placeholder="Type here price"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control  flex flex-col items-center my-4">
                        <label>Recipe Details</label>
                        <textarea
                            {...register("recipe", { required: true })}
                            cols={30}
                            rows={10}
                            placeholder="Type here Recepie Name"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control  flex flex-col items-center my-4">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                </div>
                <button className="btn text-center w-full">AddItem <FaUtensils></FaUtensils></button>
            </form>
        </div>
    );
};

export default ItemForm;