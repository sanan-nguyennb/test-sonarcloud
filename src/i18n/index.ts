import { createI18n } from 'vue-i18n';
import en from './locales/en';
import vi from './locales/vi';

const i18n = createI18n({
    legacy: false, // Set to false to use Composition API
    locale: 'en', // Set default locale
    fallbackLocale: 'en', // Set fallback locale
    messages: {
        en,
        vi,
    },
    globalInjection: true, // Inject $t, $d, etc. into all components
    pluralizationRules: {
        /**
         * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
         * @param choicesLength {number} an overall amount of available choices
         * @returns a final choice index to select plural word by
         */
        vi: function (choice: number) {
            return choice === 0 || choice === 1 ? 0 : 1;
        },
    },
});

export default i18n;
