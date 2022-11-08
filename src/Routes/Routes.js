import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Deatails from "../pages/Details/Details";
import Home from "../pages/Home/Home";
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
            path: '/services/1',
            element: <Deatails></Deatails>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        }
    ]
  },
]);
