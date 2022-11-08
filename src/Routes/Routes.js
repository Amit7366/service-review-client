import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Deatails from "../pages/Details/Deatails";
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
            path: '/details',
            element: <Deatails></Deatails>
        },
    ]
  },
]);
