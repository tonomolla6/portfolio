<template lang="pug">
.palette
  ul
    li(@click="changeColor('#76b356')" :class="{ active: themeColorPrimary == '#76b356' }" style="background-color: #76b356")
    li(@click="changeColor('#4696b3')" :class="{ active: themeColorPrimary == '#4696b3' }" style="background-color: #4696b3")
    li(@click="changeColor('#a646b3')" :class="{ active: themeColorPrimary == '#a646b3' }" style="background-color: #a646b3")
    li(@click="changeColor('#b34646')" :class="{ active: themeColorPrimary == '#b34646' }" style="background-color: #b34646")
    li(@click="changeColor('#b3a646')" :class="{ active: themeColorPrimary == '#b3a646' }" style="background-color: #b3a646")
    li(@click="changeColor('#b376a6')" :class="{ active: themeColorPrimary == '#b376a6' }" style="background-color: #b376a6")
  .theme-switch(@click="toggleTheme" :class="{ 'dark': isDarkTheme() }").cursor-hover
    svg(xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512")
      path(:fill="!isDarkTheme() ? 'black' : 'white'" d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z")
</template>

<script>
import { useTheme } from '~/store/theme';

export default {
  setup() {
    const { themeColorPrimary, themeColorSecondary, themeBackgroundPrimary, themeBackgroundSecondary } = useTheme();

    const changeColor = (newColor) => {
      themeColorPrimary.value = newColor;
    };

    const toggleTheme = () => {
      if (themeColorSecondary.value === '#FFFFFF') {
        themeColorSecondary.value = '#000000';
        themeBackgroundPrimary.value = '#FFFFFF';
        themeBackgroundSecondary.value = '#ebebeb';
      } else {
        themeColorSecondary.value = '#FFFFFF';
        themeBackgroundPrimary.value = '#000000';
        themeBackgroundSecondary.value = '#111111';
      }
    };
    const isDarkTheme = () => themeColorSecondary.value === '#000000';

    return {
      themeColorPrimary,
      changeColor,
      toggleTheme,
      isDarkTheme
    };
  },
};
</script>
  

<style>
.palette {
  position: absolute;
  right: 0;
  z-index: 1;
}

.palette ul {
  background: black;
  margin: 36px 0px 0px 0px;
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
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
}

.theme-switch.dark {
  background-color: black;
}
</style>