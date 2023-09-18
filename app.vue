<template lang="pug">
.app(:class="mode == 1 ? 'app-mode' : ''")
  Pagination
  ColorPalette(v-if="width >= 1200 || route.name == 'index'")
  Navbar
  
  Cursor(v-if="width >= 1200")
    NuxtPage
  NuxtPage(v-else)
</template>

<script>
import { useModeStore } from '~/store/mode';
import { useThemeStore } from '~/store/theme';
import { useRoute } from 'vue-router';
import { computed, onMounted, watch } from 'vue';

export default {
  setup() {
    const modeStore = useModeStore();
    const themeStore = useThemeStore();
    const mode = computed(() => modeStore.mode);
    const route = useRoute();
    const pages_without_scroll = ['/'];

    const width = ref(window.innerWidth);

    onMounted(() => {
      checkRoute(route.path);
      themeStore.init();
    });
    
    watch(() => route.path, (newPath) => checkRoute(newPath));

    const checkRoute = (newPath) => {
      const htmlElement = document.querySelector('html');

      if (pages_without_scroll.includes(newPath)) {
        htmlElement.classList.add('no-scroll');
        htmlElement.classList.remove('scroll');
      } else {
        htmlElement.classList.add('scroll');
        htmlElement.classList.remove('no-scroll');
      }
    }

    window.addEventListener("resize", () => {
      width.value = window.innerWidth;

      if (width.value <= 760) {
        modeStore.changeMode(0);
      }
    });

    return {
      width,
      route,
      mode
    };
  },
};
</script>

<style scoped>
.app-mode {
  padding-top: 104px;
}
</style>