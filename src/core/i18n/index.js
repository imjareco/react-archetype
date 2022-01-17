import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export default (translations) => {

  const resources =  { translations };

  i18n.use(initReactI18next)
    .init(
      {
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false
        }
      }
    );

  return i18n;
};