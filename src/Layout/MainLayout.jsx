import { Outlet } from "react-router-dom";
import NavbarMain from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import MainLoading from "../Components/mainLoading/MainLoading";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 4000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            {
                isLoading ? <MainLoading /> :
                    <div className="duration-700">
                        <div>
                            <NavbarMain />
                        </div>
                        <Outlet />
                        <div>
                            <Footer />
                        </div>
                    </div>
            }
        </>
    );
};

export default MainLayout;