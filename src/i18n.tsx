import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import de from './languages/de.json'
import en from './languages/en.json'

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en-GB',
        lng: 'de-DE',
        initImmediate: false,
        resources: {
            "en-GB": {translation: en},
            "de-DE": {translation: de},
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;
