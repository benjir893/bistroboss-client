import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { FaShopify } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="md:grid grid-cols-4">
            <div className="md:col-span-1 min-h-screen bg-orange-300">
                <ul className="menu bg-base-200 menu-title ">
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard'}>My Dashboard</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard'}><IoHome /> User Home</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/reservation'}><FaCalendarAlt /> Reservation</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/paymenthistory'}><IoWalletSharp /> Payment History</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/cart'}><FaShoppingCart /> My cart</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/addreview'}><FaGrinStars /> Add Review</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/dashboard/mybooking'}><FaCalendarCheck /> My Booking</NavLink></li>
                    <div className="divider"></div>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/'}><IoHomeSharp /> Home</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/menu'}><MdMenuBook /> our menu</NavLink></li>
                    <li className='py-2'><NavLink className={'uppercase text-xl font-semibold font-robotocondence'} to={'/order/salad'}><FaShopify /> our shop</NavLink></li>
                </ul>
            </div>
            <div className='md:col-span-3 min-h-screen bg-lime-300'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;