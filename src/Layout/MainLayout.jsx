import { Outlet, useLocation } from "react-router-dom";
import NavbarMain from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import MainLoading from "../Components/mainLoading/MainLoading";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {

    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, [])

    const noHeaderFooter = location.pathname.includes('signIn') || location.pathname.includes('signUp');
    // console.log(noHeaderFooter);

    return (
        <>
            {
                isLoading ? <MainLoading /> :
                    <div className="duration-700">
                        <div>
                            {noHeaderFooter || <NavbarMain />}
                        </div>
                        <Outlet />
                        <div>
                            {noHeaderFooter || <Footer />}
                        </div>
                    </div>
            }
        </>
    );
};

export default MainLayout;