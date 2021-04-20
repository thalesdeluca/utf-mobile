import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import ptBr from './ptBR'
import enUs from './enUS'

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  'en-US': enUs,
  'pt-BR': ptBr,
};
// Set the locale once at the beginning of your app.

i18n.fallbacks = true;
i18n.defaultLocale = 'en-US'
i18n.locale = Localization.locale;

export default i18n