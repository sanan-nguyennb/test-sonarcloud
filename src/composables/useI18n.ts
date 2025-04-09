import { useI18n as vueUseI18n } from 'vue-i18n'
import type { DefineLocaleMessage } from 'vue-i18n'

export function useI18n() {
  const i18n = vueUseI18n<{ message: DefineLocaleMessage }>()

  const setLocale = (locale: 'en' | 'vi') => {
    i18n.locale.value = locale
  }

  const getLocale = () => i18n.locale.value

  return {
    t: i18n.t,
    locale: i18n.locale,
    setLocale,
    getLocale
  }
} 