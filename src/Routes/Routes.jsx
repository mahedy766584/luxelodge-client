import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/rooms/Rooms";
import Bookings from "../Pages/bookings/Bookings";
import Contact from "../Pages/contact/Contact";
import About from "../Pages/about/About";
import Gallery from "../Pages/gallery/Gallery";
import CardDetails from "../Pages/roomDetails/CardDetails";
import SignIn from "../Pages/signIn/SignIn";
import SignUp from "../Pages/signUp/SignUp";
import PrivateRoute from "../Components/private/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/dashboard/Profile";
import Booking from "../Pages/dashboard/Booking";
import AddRoom from "../Pages/dashboard/AddRoom";
import AllUsers from "../Pages/dashboard/AllUsers";
import AllBookings from "../Pages/dashboard/AllBookings";
import AdminRoute from "../Components/private/AdminRoute";
import ManageRooms from "../Pages/dashboard/ManageRooms";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/rooms",
                element: <PrivateRoute><Rooms /></PrivateRoute>
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Bookings /></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/gallery",
                element: <PrivateRoute><Gallery /></PrivateRoute>
            },
            {
                path: "/cartDetails/:id",
                element: <PrivateRoute><CardDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-seven-ashen.vercel.app/rooms/${params.id}`)
            },
            {
                path: "/signIn",
                element: <SignIn />
            },
            {
                path: "/signUp",
                element: <SignUp />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            // admin routes
            {
                path: "/dashboard",
                element: <Profile />
            },
            {
                path: "addRoom",
                element: <AdminRoute>
                    <AddRoom />
                </AdminRoute>
            },
            {
                path: "allUser",
                element: <AdminRoute>
                    <AllUsers />
                </AdminRoute>
            },
            {
                path: "allBookings",
                element: <AdminRoute>
                    <AllBookings />
                </AdminRoute>
            },
            {
                path: "manageRoom",
                element: <ManageRooms />
            },

            // user routes
            {
                path: "bookings",
                element: <Booking />
            }
        ]
    }
])

export default myCreatedRouter;