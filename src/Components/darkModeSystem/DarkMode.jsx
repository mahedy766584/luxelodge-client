import { IoIosSunny } from "react-icons/io";
import { useTheme } from "../../Hooks/useTheme";
import { IoMoonSharp } from "react-icons/io5";

const DarkMode = () => {

    const { changeThem, mode } = useTheme();

    return (
        <div>
            {
                mode === "light" ?
                    <button onClick={changeThem} className="text-navyGray text-2xl">
                        <IoIosSunny size={35} className={`dark:text-silver`}/>
                    </button>
                    :
                    <button onClick={changeThem} className="text-navyGray text-2xl">
                        <IoMoonSharp size={35} className="dark:text-silver"/>
                    </button>
            }
        </div>
    );
};

export default DarkMode;