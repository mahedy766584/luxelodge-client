import { useContext } from "react";
import { TranslateContext } from "../provider/TranslateProvider";

const TranslateSelector = () => {

    const { language, changeLanguage } = useContext(TranslateContext);

    return (
        <div>
            <select
                className="text-navyGray"
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
            >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="bn">বাংলা</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="ur">اردو</option>
            </select>
        </div>
    );
};

export default TranslateSelector;