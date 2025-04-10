<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './components/LanguageSwitcher.vue';

const { t } = useI18n();
</script>

<template>
    <div class="app-container">
        <header>
            <h1>{{ t('common.welcome') }}</h1>
            <LanguageSwitcher />
        </header>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped>
.app-container {
    padding: 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

h1 {
    margin: 0;
}

nav {
    padding: 1rem 0;
    margin-bottom: 1rem;
}

nav a {
    color: #42b983;
    text-decoration: none;
    margin: 0 0.5rem;
}

nav a:hover {
    text-decoration: underline;
}

nav a.router-link-active {
    color: #2c3e50;
    font-weight: bold;
}
</style>
