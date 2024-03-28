import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Layout from "../Layout/Layout";



const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router;