import { defineStore } from "pinia";

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    theme: localStorage.getItem('theme') || 'light',
    primary_color: '#76b356',
  }),
  getters: {
    themeColorPrimary: (state) => state.primary_color,
    themeColorSecondary: (state) => state.theme === 'light' ? '#FFFFFF' : '#000000',
    themeBackgroundPrimary: (state) => state.theme === 'light' ? '#000000' : '#FFFFFF',
    themeBackgroundSecondary: (state) => state.theme === 'light' ? '#111111' : '#ebebeb',
    themeColorSecondaryNot: (state) => state.theme === 'light' ? '#000000' : '#FFFFFF',
    themeBackgroundPrimaryNot: (state) => state.theme === 'light' ? '#FFFFFF' : '#000000',
    themeBackgroundSecondaryNot: (state) => state.theme === 'light' ? '#ebebeb' : '#111111'
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      this.updateRootCSS();
    },
    updateRootCSS() {
      document.documentElement.style.setProperty('--theme-color-primary', this.themeColorPrimary);
      document.documentElement.style.setProperty('--theme-color-secondary', this.themeColorSecondary);
      document.documentElement.style.setProperty('--theme-background-primary', this.themeBackgroundPrimary);
      document.documentElement.style.setProperty('--theme-background-secondary', this.themeBackgroundSecondary);
      document.documentElement.style.setProperty('--theme-color-secondary-not', this.themeColorSecondaryNot);
      document.documentElement.style.setProperty('--theme-background-primary-not', this.themeBackgroundPrimaryNot);
      document.documentElement.style.setProperty('--theme-background-secondary-not', this.themeBackgroundSecondaryNot);
    },
    changePrimaryColor(color = '#76b356') {
      this.primary_color = color;
      this.updateRootCSS();
    },
    init() {
      this.updateRootCSS();
    }
  },
});