// store/theme.js
import { ref, watch } from 'vue';

// Carga el color desde localStorage si existe, de lo contrario, utiliza un valor predeterminado
const initialColor = localStorage.getItem('themeColor') || '#ff5733';

const themeColor = ref(initialColor);

// Observa los cambios en themeColor y actualiza localStorage
watch(themeColor, (newColor) => {
  localStorage.setItem('themeColor', newColor);
});

export const useTheme = () => {
  return { themeColor };
};