<template>
  <div class="language-switcher">
    <button
      v-for="lang in availableLocales"
      :key="lang"
      :class="{ active: currentLocale === lang }"
      class="lang-button"
      @click="setLocale(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const availableLocales = ['en', 'vi'] as const;
const currentLocale = computed(() => i18n.locale.value);

const setLocale = (locale: 'en' | 'vi') => {
    i18n.locale.value = locale;
};
</script>

<style scoped>
.language-switcher {
    display: flex;
    gap: 8px;
}

.lang-button {
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background: white;
}

.lang-button.active {
    background: #4caf50;
    color: white;
    border-color: #4caf50;
}
</style>
