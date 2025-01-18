/* eslint-disable react/prop-types */
import useTranslate from "../../Hooks/useTranslate";

const Translate = ({ en, bn, ar }) => {

    const { language } = useTranslate();

    if(language === "bn"){
        return bn
    }
    if(language === "ar"){
        return ar
    }


    return <>{en}</>
};

export default Translate;