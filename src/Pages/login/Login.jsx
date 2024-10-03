import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Authcontext } from "../../Authentication/AuthProvider";
import Sociallogin from "../components/socialLogin/Sociallogin";


const Login = () => {


    const [disabled, setDisabled] = useState(true)
    const { user, loginUser } = useContext(Authcontext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handlLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const newuser = { email, password };
        // console.log(newuser)
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .then(error => {
                console.error(error)
            })

    }
    const handlCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
        // console.log(user_captcha_value)
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handlLogin} className="card-body">
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
                                <label className="label">
                                    <Link to={'/register'}><button className="btn btn-outline label-text-alt link link-hover">want to Sign up First</button></Link>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handlCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                                {/* <button className="btn btn-outline btn-xs">validate</button> */}
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value={'Login'}></input>

                            </div>
                        </form>
                        <Link className="p-2" to={'/register'}><small>No Account yet ?</small><strong>Register</strong></Link>
                        <div className="">
                            <Sociallogin></Sociallogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;