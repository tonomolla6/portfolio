<template lang="pug">
.palette
  ul
    li(@click="changePrimaryColor('#76b356')" :class="{ active: themeColorPrimary == '#76b356' }" style="background-color: #76b356")
    li(@click="changePrimaryColor('#4696b3')" :class="{ active: themeColorPrimary == '#4696b3' }" style="background-color: #4696b3")
    li(@click="changePrimaryColor('#a646b3')" :class="{ active: themeColorPrimary == '#a646b3' }" style="background-color: #a646b3")
    li(@click="changePrimaryColor('#b34646')" :class="{ active: themeColorPrimary == '#b34646' }" style="background-color: #b34646")
    li(@click="changePrimaryColor('#b3a646')" :class="{ active: themeColorPrimary == '#b3a646' }" style="background-color: #b3a646")
    li(@click="changePrimaryColor('#b376a6')" :class="{ active: themeColorPrimary == '#b376a6' }" style="background-color: #b376a6")
  .theme-switch.cursor-hover(@click="toggleTheme" :class="theme")
    svg(xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512")
      path(fill="var(--theme-color-secondary-not)" d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z")
</template>

<script>
import { useThemeStore } from '~/store/theme';

export default {
  setup() {
    const themeStore = useThemeStore();

    return {
      themeColorPrimary: computed(() => themeStore.themeColorPrimary),
      changePrimaryColor: themeStore.changePrimaryColor,
      toggleTheme: themeStore.toggleTheme,
      theme: themeStore.theme
    };
  }
};
</script>

<style scoped>
.palette {
  position: absolute;
  right: 0;
  z-index: 1;
}

.palette ul {
  background: black;
  margin: 20px 0px 0px 0px;
  padding: 15px 14px;
}

.palette ul li {
  list-style: none;
  width: 20px;
  height: 20px;
  margin: 10px 0px;
  cursor: pointer;
}

/* Estilo para los elementos activos */
.palette ul li.active {
  border: 2px solid white;
}

.theme-switch {
  padding: 15px;
  width: 48px;
  height: 48px;
  background-color: var(--theme-color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
}

.theme-switch.dark {
  background-color: var(--theme-color-secondary);
}
</style>