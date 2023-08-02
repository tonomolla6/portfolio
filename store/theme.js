// store/theme.js
import { ref, watch } from 'vue';

const initialColorPrimary = localStorage.getItem('themeColorPrimary') || '#76b356';
const initialColorSecondary = localStorage.getItem('themeColorSecondary') || '#FFFFFF';
const initialBackgroundPrimary = localStorage.getItem('themeBackgroundPrimary') || '#000000';
const initialBackgroundSecondary = localStorage.getItem('themeBackgroundSecondary') || '#111111';

const themeColorPrimary = ref(initialColorPrimary);
const themeColorSecondary = ref(initialColorSecondary);
const themeBackgroundPrimary = ref(initialBackgroundPrimary);
const themeBackgroundSecondary = ref(initialBackgroundSecondary);

// Función para actualizar las variables CSS en la raíz
const updateRootCSS = () => {
  document.documentElement.style.setProperty('--theme-color-primary', themeColorPrimary.value);
  document.documentElement.style.setProperty('--theme-color-secondary', themeColorSecondary.value);
  document.documentElement.style.setProperty('--theme-backgroud-primary', themeBackgroundPrimary.value);
  document.documentElement.style.setProperty('--theme-backgroud-secondary', themeBackgroundSecondary.value);
};

// Observa los cambios en las variables de color y actualiza localStorage
const updateLocalStorage = () => {
  localStorage.setItem('themeColorPrimary', themeColorPrimary.value);
  localStorage.setItem('themeColorSecondary', themeColorSecondary.value);
  localStorage.setItem('themeBackgroundPrimary', themeBackgroundPrimary.value);
  localStorage.setItem('themeBackgroundSecondary', themeBackgroundSecondary.value);

  // Actualiza las variables CSS en la raíz
  updateRootCSS();
};

watch(themeColorPrimary, updateLocalStorage);
watch(themeColorSecondary, updateLocalStorage);
watch(themeBackgroundPrimary, updateLocalStorage);
watch(themeBackgroundSecondary, updateLocalStorage);

// Inicializa las variables CSS en la raíz en la carga inicial
updateRootCSS();

export const useTheme = () => {
  return {
    themeColorPrimary,
    themeColorSecondary,
    themeBackgroundPrimary,
    themeBackgroundSecondary
  };
};
