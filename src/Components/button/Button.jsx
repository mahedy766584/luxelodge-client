/* eslint-disable react/prop-types */
// import "./button.css";

const Button = ({children}) => {
    return (
        <>
            {/* <div className="middle"> */}
            {/* <a href="#" className="btn btn1">Booking1</a>
                <a href="#" className="btn btn2">Booking2</a>
                <a href="#" className="btn btn3">Booking3</a> */}
            {/* <button className="btn btn4">Booking4</button>
            </div> */}
            <button className="relative w-full overflow-hidden font-medium  py-3 px-10 bg-silver hover:text-silver duration-300 hover:animate-none animate-bounce top-6 text-navyGray font-kanit  group">
                <span className="relative z-10 uppercase">{children}</span>
                <div className="absolute inset-0 bg-redBg transition-all duration-500 ease-out group-hover:translate-x-0 origin-center left-[50%] right-[50%] group-hover:left-0 group-hover:right-0 "></div>
            </button>
        </>
    );
};

export default Button;