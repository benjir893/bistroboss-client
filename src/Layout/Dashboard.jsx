import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaCalendarAlt, FaList, FaUsers, FaUtensils, FaUtensilSpoon } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import useCart from '../Pages/hooks/useCart';
import { FaEnvelope } from 'react-icons/fa6';
import { Authcontext } from '../Authentication/AuthProvider';
import useAdmin from '../Pages/hooks/useAdmin';

const Dashboard = () => {
    // const {user} = useContext(Authcontext)
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="md:grid grid-cols-4">
            <div className="md:col-span-1 min-h-screen bg-orange-300">
                <div className="">
                    <h1 className='flex justify-start items-center pl-2 uppercase text-4xl font-sofadi font-bold '><FaUtensilSpoon className='text-lg'></FaUtensilSpoon>bistro boss </h1>
                    <h1 className='pl-8 uppercase text-2xl font-light tracking-widest '>restaurent </h1>
                </div>
                <ul className="menu bg-base-200 menu-title ">
                    {
                        isAdmin?<>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/adminhome'}>Admin home</NavLink></li>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/additems'}><FaUtensils /> add items</NavLink></li>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/manageitems'}><FaList /> Manage items</NavLink></li>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/allusers'}><FaUsers /> all users</NavLink></li>

                        </>:<>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard'}>My Dashboard</NavLink></li>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard'}><IoHome /> User Home</NavLink></li>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/reservation'}><FaCalendarAlt /> Reservation</NavLink></li>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/paymenthistory'}><IoWalletSharp /> Payment History</NavLink></li>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/cart'}><FaShoppingCart /> My cart <span className='text-red-200 text-xs'>({cart?.length})</span></NavLink></li>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/addreview'}><FaGrinStars /> Add Review</NavLink></li>
                            <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/mybooking'}><FaCalendarCheck /> My Booking</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/'}><IoHomeSharp /> Home</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/menu'}><MdMenuBook /> our menu</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/order/salad'}><FaShopify /> our shop</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/contact'}><FaEnvelope /> Contact Us</NavLink></li>
                </ul>
            </div>
            <div className='md:col-span-3 min-h-screen bg-lime-300'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;