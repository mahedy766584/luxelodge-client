/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import MainLoading from "../mainLoading/MainLoading";

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useAuth();

    const location = useLocation();
    // console.log(location.pathname);

    // console.log(user);

    if (isLoading) {
        return <MainLoading/>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/signIn'} state={{from: location}} replace/>
};

export default PrivateRoute;