import React, {useContext} from 'react';
import LanguageContext from "../../context/language";

const LanguageSwitcher = () => {
    const {language, setLanguage} = useContext(LanguageContext);
    return (
        <button className={"btn btn-primary ml-4"}
        onClick={()=> setLanguage(language === "en-US"? "ar-SA" : "en-US")}>
            {language === "en-US" ? "EN" : "AR"}
        </button>
    );
};

export default LanguageSwitcher;