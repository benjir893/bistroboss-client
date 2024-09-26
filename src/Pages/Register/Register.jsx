import { useContext } from "react";
import { Authcontext } from "../../Authentication/AuthProvider";


const Register = () => {
    const{createUser} = useContext(Authcontext)

    const handlRegister=(event)=>{
        event.preventDefault();

        const form = event.target;
        const name = event.name.vaule;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            alert(" a new user has been added")
        })
        .then(error =>{
            console.error(error)
        })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handlRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                
                            </div>
                        </form>
                        <button className="btn">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;