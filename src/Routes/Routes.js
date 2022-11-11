import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../pages/AdddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Deatails from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Reviews from "../pages/Reviews/Reviews";
import UpdateReview from "../pages/Reviews/UpdateReview";
import Service from "../pages/Service/Service";
import PrivateRoutes from "./PrivateRoutes";


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
            loader: () => fetch('https://service-review-server-amit7366.vercel.app/allServices'),
            element: <Service></Service>
        },
        {
            path: '/reviews',
            element: <PrivateRoutes><Reviews></Reviews></PrivateRoutes>
        },
        {
            path: '/reviews/:id',
            loader: ({params}) => fetch(`https://service-review-server-amit7366.vercel.app/review/${params.id}`),
            element: <PrivateRoutes><UpdateReview></UpdateReview></PrivateRoutes>
        },
        {
            path: '/addservice',
            element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
        },
        {
            path: '/services/:id',
            loader:({params}) => fetch(`https://service-review-server-amit7366.vercel.app/service/${params.id}`),
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
