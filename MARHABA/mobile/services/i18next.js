import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import 'intl-pluralrules'


export const languageResources = {
    en: {translation: en},
    fr: {translation: fr},
};


i18next.use(initReactI18next).init({
    compatibilityJson: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResources,
});

export default i18next;