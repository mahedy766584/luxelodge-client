
import logo from "../../assets/logos/logo3.png";

const Logo = () => {
    return (
        <div className="flex items-center justify-center flex-row-reverse hover:scale-x-110 duration-500">
            <h1 className="lg:text-3xl text-xl font-extrabold font-kanit text-redBg">LuxeLodge</h1>
            <img src={logo} alt="LuxeLodge" className="lg:w-16 lg:h-16 w-12 h-12"/>
        </div>
    );
};

export default Logo;