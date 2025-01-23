/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { TranslateContext } from "../provider/TranslateProvider";
import translate from "translate";

const Translate = ({ text, number = null }) => {

    const { language } = useContext(TranslateContext);
    const [translatedText, setTranslatedText] = useState(text)
    const [translatedNumber, setTranslatedNumber] = useState(number);

    useEffect(() => {
        const fetchTranslation = async () => {
            if (language !== 'en') {
                try {
                    if (text) {
                        const result = await translate(text, { to: language });
                        setTranslatedText(result);
                    }else{
                        setTranslatedText("")
                    }

                    if (number !== null) {
                        const parsedNumber = parseFloat(number);
                        if (!isNaN(parsedNumber)) {
                            const numberFormat = new Intl.NumberFormat(language);
                            const translatedNum = numberFormat.format(parsedNumber);
                            setTranslatedNumber(translatedNum);
                        } else {
                            console.warn('Invalid number format:', number);
                            setTranslatedNumber(number);
                        }
                    }

                } catch (error) {
                    console.error('Translation error:', error);
                }
            } else {
                setTranslatedText(text);
                setTranslatedNumber(number);
            }
        };

        fetchTranslation();
    }, [text, number, language]);

    return (
        <>
            {number !== null ? `${translatedNumber} ${translatedText}` : translatedText}
        </>
    );
};

export default Translate;