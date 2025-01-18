import { useContext } from "react";
import { LanguageContext } from "../Components/provider/LanguageProvider";

const useTranslate = () => {

    const translateLanguage = useContext(LanguageContext);

    return  translateLanguage;
};

export default useTranslate;