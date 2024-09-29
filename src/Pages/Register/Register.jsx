import { useContext } from "react";
import { Authcontext } from "../../Authentication/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const { createUser, updateuserinfo } = useContext(Authcontext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
         console.log(data) 
         createUser(data.email, data.password)
         .then(result=>{
            const loggeduser = result.user;
            console.log(loggeduser);
            updateuserinfo(data.name, data.photo)
            .then(()=>{
                console.log('user profile has been updated')
                reset();
                alert(" a new user has been added successfully")
                navigate('/')
            })
            .catch(error =>console.error(error));
            
         })
        }


    // const handlRegister = (event) => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const name = event.name.vaule;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     // console.log(email, password)
    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
    //             alert(" a new user has been added")
    //         })
    //         .then(error => {
    //             console.error(error)
    //         })

    // }
    return (
        <>
        <Helmet>
            <title>BBs:register</title>
        </Helmet>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Register now!</h1>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500 text-xs">fill up the name field</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photo</span>
                                    </label>
                                    <input type="text" {...register("photo", { required: true })} placeholder="place photo url here" className="input input-bordered" />
                                    {errors.photo && <span className="text-red-500 text-xs">fill up the field with url</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-500 text-xs">fill up the email field</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 25,
                                        pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/
                                    })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-red-500 text-xs">forgot password ? </span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-500 text-xs">passwrod must be 6 characters </span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-500 text-xs">Maximum 20 charachters allowed </span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-500 text-xs">at least 1 number, uppercase, lower case required </span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                            </form>
                            <button className="btn">Login with Google</button>
                            <Link className="p-2" to={'/login'}><small>Already have an account? </small><strong>Login</strong></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;