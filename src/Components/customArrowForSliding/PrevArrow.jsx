/* eslint-disable react/prop-types */
import "./custom.css";
import { GrPrevious } from "react-icons/gr";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow custom-prev text-redBg"
            onClick={onClick}
        >
            <GrPrevious/>
        </div>
    );
};

export default PrevArrow;