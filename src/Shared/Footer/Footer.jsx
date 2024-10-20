
import Content from "../../Components/footerContent/Content";
import "./footer.css"
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            {/* Footer content component here */}
            <Content />
            <a href="#">
                <div className="absolute bottom-10 right-6 bg-navyGray text-silver p-2 text-3xl rounded animate-pulse cursor-pointer">
                    <IoIosArrowRoundUp />
                </div>
            </a>
        </footer>
    );
};

export default Footer;