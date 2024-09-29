
import { Link, useNavigate } from 'react-router-dom';
import carticon from '../../../assets/carticon.png';
import { FaShoppingCart } from "react-icons/fa";
import logo from '../../../assets/logo.webp';
import { CgProfile } from "react-icons/cg";
import { useContext } from 'react';
import { Authcontext } from '../../../Authentication/AuthProvider';
import useCart from '../../hooks/useCart';
const Navbar = () => {
    const { user, logout } = useContext(Authcontext)
    const navigate = useNavigate()
    const[cart]= useCart();
    const navlinks = <>
        <li><Link className='text-white font-semibold font-robotocondence'>CONTACT US</Link></li>
        <li><Link className='text-white font-semibold font-robotocondence'>DASHBOARD</Link></li>
        <li ><Link to={'/'} className='text-white font-semibold font-robotocondence' >HOME</Link></li>
        <li><Link to={'/menu'} className='text-white font-semibold font-robotocondence'>OUR MENU</Link></li>
        <li ><Link to={'/order/salad'} className='text-white font-semibold font-robotocondence'>OUR SHOP</Link></li>
        <li ><Link to={'/'} className='text-white -mt-4'> <button className="btn btn-ghost">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length}</div>
        </button></Link></li>
    </>
    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/login')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="navbar fixed max-w-screen-xl  z-10 bg-black bg-opacity-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className='w-10 h-10 rounded-full' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end pr-2">
                    {
                        user ? <><span className='text-white font-robotocondence px-1'>{user.displayName}</span>
                            <button onClick={handleLogout} className="btn bg-transparent text-white">SIGN OUT</button></> :
                            <><Link to={'/login'}><button className="btn bg-transparent text-white">SIGN IN</button></Link></>
                    }

                    {
                        user ? <><img className='w-10 h-10 rounded-full' src={user.photoURL}></img></> : <p className='text-5xl text-white'><CgProfile /></p>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;