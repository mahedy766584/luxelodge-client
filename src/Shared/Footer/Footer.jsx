
import Content from "../../Components/footerContent/Content";
import "./footer.css"
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            {/* Footer content component here */}
            <Content />
            <a href="#">
                <div className="absolute bottom-10 right-6 bg-navyGray text-silver p-2 text-3xl rounded animate-pulse cursor-pointer ">
                    <IoIosArrowRoundUp />
                </div>
            </a>
        </footer>
    );
};

export default Footer;