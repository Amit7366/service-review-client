import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../pages/AdddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Deatails from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Reviews from "../pages/Reviews/Reviews";
import Service from "../pages/Service/Service";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Service></Service>
        },
        {
            path: '/reviews',
            element: <Reviews></Reviews>
        },
        {
            path: '/addservice',
            element: <AddService></AddService>
        },
        {
            path: '/services/1',
            element: <Deatails></Deatails>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        },
        {
            path:'/login',
            element: <Login></Login>
        },{
            path:'/register',
            element: <Register></Register>
        }
    ]
  },
]);
