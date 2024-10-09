
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
import AdminRouter from "./AdminRouter";
import Updateitem from "../Pages/Dashboard/DashHome/UpdateItem/Updateitem";

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
                element:<AdminRouter><Adminhome></Adminhome></AdminRouter>
            },
            {
                path: '/dashboard/additems',
                element: <AdminRouter><Additems></Additems></AdminRouter>
            },
            {
                path:'manageitems',
                element:<AdminRouter><Manageitems></Manageitems></AdminRouter>
            },
            {
                path:'updateitem/:id',
                element:<AdminRouter><Updateitem></Updateitem></AdminRouter>,
                loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRouter><Allusers></Allusers></AdminRouter>
            }
        ]
    }
])