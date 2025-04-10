import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/main.css';
import App from './App.vue';
import i18n from './i18n/index.ts';
import router from './router';
import { setupRouterGuards } from './router/guards';

const app = createApp(App);
const pinia = createPinia();

// Setup router
app.use(router);
setupRouterGuards(router);

// Setup i18n
app.use(i18n);

// Setup Pinia
app.use(pinia);

app.mount('#app');
