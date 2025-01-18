import axios from "axios";

const translateText = async (text, targetLang) => {
    try {
        const response = await axios.get(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(
                text
            )}`
        );
        return response.data[0][0][0];
    } catch (error) {
        console.error("Translation Error:", error);
        return text;
    }
};

export default translateText;






