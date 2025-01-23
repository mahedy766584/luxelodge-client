/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const TranslateContext = createContext();

const TranslateProvider = ({ children }) => {

    const [language, setLanguage] = useState("en");

    useEffect(() =>{
        const savedLanguage = localStorage.getItem('language') || "en";
        setLanguage(savedLanguage);
    },[])

    const changeLanguage = (newLanguage) =>{
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage)
    }

    return (
        <TranslateContext.Provider value={{language, changeLanguage}}>
            {children}
        </TranslateContext.Provider>
    );
};

export default TranslateProvider;