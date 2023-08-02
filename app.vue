<template lang="pug">
.app
  Pagination
  ColorPalette
  Navbar
  Cursor
    NuxtPage
</template>

<script>
import { watch } from 'vue';
import { useTheme } from '~/store/theme';

export default {
  setup() {
    const { themeColorPrimary } = useTheme();

    if (!localStorage.getItem('themeColorPrimary')) 
      localStorage.setItem('themeColorPrimary', '#76b356')

    watch(themeColorPrimary, (newColor) => {
      document.documentElement.style.setProperty('--theme-color-primary', newColor);
    });

    return {};
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: system-ui;
}

* {
  box-sizing: border-box;
}

.app {
  padding-top: 104px;
}

.limit {
  max-width: 1120px;
  margin: auto;
}

@media (max-width: 1200px) {
  .limit {
    margin-left: 50px;
    margin-right: 50px;
  }
}

.cursor-hover {
  color: var(--theme-color-secondary);
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

:root {
  --theme-color-primary: #76b356; 
  --theme-color-secondary: #FFFFFF; 
  --theme-backgroud-primary: #000000; 
  --theme-backgroud-secondary: #111111;
}
</style>
