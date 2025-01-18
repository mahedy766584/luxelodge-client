/* eslint-disable react/prop-types */

import logo from "../../assets/logos/logo3.png";
import Translate from "../translate/Translate";

const Logo = ({hidden}) => {
    return (
        <div className={`${hidden} flex items-center justify-center flex-row-reverse hover:scale-x-110 duration-500`}>
            <h1 className="lg:text-3xl text-xl font-medium font-kanit text-redBg">
                <Translate en={'RestNest'} bn={'রেস্টনেস্ট'} ar={'ريست نيست'}/>
            </h1>
            <img src={logo} alt="LuxeLodge" className="lg:w-16 lg:h-16 w-12 h-12" />
        </div>
    );
};

export default Logo;