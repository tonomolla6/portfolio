<template lang="pug">
.app
  Navbar
  Cursor
    NuxtPage
</template>

<script>
import { watch } from 'vue';
import { useTheme } from '~/store/theme';

export default {
  setup() {
    const { themeColor } = useTheme();

    if (!localStorage.getItem('themeColor')) 
      localStorage.setItem('themeColor', '#ff5733')

    watch(themeColor, (newColor) => {
      document.documentElement.style.setProperty('--theme-color', newColor);
    });

    return {};
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: system-ui;
  cursor: none;
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

a.cursor-hover {
  color: white;
  font-weight: bold;
  text-decoration: none;
  cursor: none;
}

.color {
  color: var(--theme-color);
}

:root {
  --theme-color: #ff5733; /* Valor predeterminado */
}
</style>
