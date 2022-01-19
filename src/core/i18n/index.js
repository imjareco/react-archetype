import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import translations from "core/translations";

const resources = { ...translations };

i18n.use(initReactI18next)
    .init(
        {
            resources,
            lng: "en",
            fallbackLng: "en",
            interpolation: {
                escapeValue: false
            }
        }
    );

export default i18n;

export const useTranslations = () => {
    const { t } = useTranslation();
    return { t };
};

export const changeLanguage = (lang) => i18n.changeLanguage(lang);
