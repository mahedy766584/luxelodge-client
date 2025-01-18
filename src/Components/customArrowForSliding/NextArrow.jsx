/* eslint-disable react/prop-types */
import { GrNext } from "react-icons/gr";
import "./custom.css"

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow custom-next text-redBg"
            onClick={onClick}
        >
            <GrNext/>
        </div>
    );
}

export default NextArrow;
