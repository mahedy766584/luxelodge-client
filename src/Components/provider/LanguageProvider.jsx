/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState("en");

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    useEffect(() =>{
        const savedLanguage = localStorage.getItem("language");
        if(savedLanguage){
            setLanguage(savedLanguage)
        }else{
            localStorage.setItem("language", "en");
        }
    },[]);

    return <LanguageContext.Provider value={{ language, changeLanguage }}>
        {children}
    </LanguageContext.Provider>;
};

export default LanguageProvider;