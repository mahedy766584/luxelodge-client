import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/rooms/Rooms";
import Bookings from "../Pages/bookings/Bookings";
import Offers from "../Pages/offers/Offers";
import Blogs from "../Pages/blogs/Blogs";
import Contact from "../Pages/contact/Contact";
import About from "../Pages/about/About";
import Gallery from "../Pages/gallery/Gallery";
import CardDetails from "../Pages/roomDetails/CardDetails";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {         
                path: "/",
                element: <Home/>
            },
            {
                path: "/rooms",
                element: <Rooms/>
            },
            {
                path: "/bookings",
                element: <Bookings/>
            },
            {
                path: "/offers",
                element: <Offers/>
            },
            {
                path: "/blogs",
                element: <Blogs/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/gallery",
                element: <Gallery/>
            },
            {
                path: "/cartDetails/:id",
                element: <CardDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
            }
        ]
    }
])

export default myCreatedRouter;