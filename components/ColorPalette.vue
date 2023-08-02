<template lang="pug">
    div(:style="{ color: themeColor }")
      | Este texto tiene el color del tema
    button(@click="changeColor('#00ff00')") Cambiar Color
</template>

<script>
// en tu componente.vue
import { useTheme } from '~/store/theme';

export default {
  setup() {
    const { themeColor } = useTheme();

    // Para cambiar el color
    const changeColor = (newColor) => {
      themeColor.value = newColor;
    };

    return {
      themeColor,
      changeColor,
    };
  },
};
</script>