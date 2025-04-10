declare module 'vue-i18n' {
    // Define the shape of your i18n messages
    export interface DefineLocaleMessage {
        common: {
            welcome: string;
            login: string;
            logout: string;
            signup: string;
            email: string;
            password: string;
            submit: string;
            cancel: string;
        };
        validation: {
            required: string;
            email: string;
            minLength: string;
            maxLength: string;
        };
        errors: {
            general: string;
            notFound: string;
            unauthorized: string;
        };
    }
}
