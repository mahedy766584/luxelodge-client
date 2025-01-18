/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import MainLoading from "../mainLoading/MainLoading";

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
        return <MainLoading/>
    }

    return <Navigate to={'/signIn'} state={{ from: location }} replace />
};

export default AdminRoute;