import useTranslate from "../../Hooks/useTranslate";

const LanguageSelector = () => {

    const { changeLanguage } = useTranslate();

    const handleChangeLanguage = (event) => {
        changeLanguage(event.target.value);
    }

    return (
        <>
            <select
                className="text-navyGray text-lg font-poppins font-normal"
                onChange={handleChangeLanguage}
            >
                <option value={"en"}>English</option>
                <option value={"bn"}>বাংলা</option>
                <option value={"ar"}>العربية</option>
            </select>
        </>
    );
};

export default LanguageSelector;