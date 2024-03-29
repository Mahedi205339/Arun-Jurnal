import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Layout from "../Layout/Layout";
import About from "../page/About/About";
import Courses from "../page/Courses/Courses";



const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
            ,
            {
                path: '/courses',
                element: <Courses />
            }
        ]
    }
])

export default router;