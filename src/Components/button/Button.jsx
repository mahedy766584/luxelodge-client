/* eslint-disable react/prop-types */
// import "./button.css";

const Button = ({
    children,
    bounce_animate,
    background,
    border,
    borderColor,
    uppercase,
    paddingX,
    textSize
}) => {
    return (
        <>
            <button
                className={`relative w-full overflow-hidden font-medium py-2 px-12 ${paddingX} bg-white ${background}  dark:bg-slate-950 dark:shadow-sm dark:shadow-silver hover:text-silver duration-300 hover:animate-none animate-bounce top-6 text-navyGray group ${bounce_animate} ${border} ${borderColor}`}>
                <span className={`relative z-10 font-poppins text-xl ${textSize} font-normal ${uppercase}`}>{children}</span>
                <div className="absolute inset-0 bg-redBg transition-all duration-500 ease-out group-hover:translate-x-0 origin-center left-[50%] right-[50%] group-hover:left-0 group-hover:right-0"></div>
            </button>
        </>
    );
};

export default Button;