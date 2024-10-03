
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/homepage/Home/Home";
import Menu from "../Pages/menu/Menu";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/cart/Cart";
import DashboardHome from "../Pages/Dashboard/DashHome/DashboardHome";
import Reservation from "../Pages/Dashboard/reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/Paymenthistory/PaymentHistory";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import Contact from "../Pages/homepage/banner/Contact";
import Additems from "../Pages/Dashboard/DashHome/AddItems/Additems";
import Adminhome from "../Pages/Dashboard/DashHome/AdminHome/Adminhome";
import Manageitems from "../Pages/Dashboard/DashHome/ManageItems/Manageitems";
import Allusers from "../Pages/Dashboard/DashHome/AllUsers/Allusers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Orders></Orders>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>

    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/cart',
                element: <Cart></Cart>
            },
            {
                path: '/dashboard/reservation',
                element: <Reservation></Reservation>
            },
            {
                path: '/dashboard/paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: '/dashboard/addreview',
                element: <AddReview></AddReview>
            },
            {
                path: '/dashboard/mybooking',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/contact',
                element: <Contact></Contact>
            },
            // admin panel
            {
                path: '/dashboard/adminhome',
                element:<Adminhome></Adminhome>
            },
            {
                path: '/dashboard/additems',
                element: <Additems></Additems>
            },
            {
                path:'/dashboard/manageitems',
                element:<Manageitems></Manageitems>
            },
            {
                path:'/dashboard/allusers',
                element:<Allusers></Allusers>
            }
        ]
    }
])