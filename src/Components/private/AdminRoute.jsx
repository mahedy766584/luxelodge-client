/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import LoadingAnimate from "../loding/LoadingAnimate";
import useAdmin from "../../Hooks/useAdmin";

const AdminRoute = ({ children }) => {

    const { user, isLoading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();
    // console.log(location.pathname);

    // console.log(user);

    if (user && isAdmin) {
        return children;
    }

    if (isLoading || isAdminLoading) {
        return <LoadingAnimate />
    }

    return <Navigate to={'/signIn'} state={{ from: location }} replace />
};

export default AdminRoute;