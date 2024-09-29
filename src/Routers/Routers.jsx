
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/homepage/Home/Home";
import Menu from "../Pages/menu/Menu";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Orders></Orders>
            },
        ]
    },
    {
        path:'/login',
        element:<Login></Login>

    },
    {
        path:'/register',
        element:<Register></Register>
    }
])