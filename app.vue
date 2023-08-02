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

.app {
  padding-top: 104px;
}

.limit {
  max-width: 1120px;
  margin: auto;
}

.link {
  color: red;
  text-decoration: none;
}

:root {
  --theme-color: #ff5733; /* Valor predeterminado */
}

/* Utiliza la variable en tus estilos */
button {
  background-color: var(--theme-color);
}
</style>
