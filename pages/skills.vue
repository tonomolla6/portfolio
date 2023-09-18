<template lang="pug">
.skills(:class="mode == 1 ? 'skills-mode' : ''")
    h1 EN CONSTRUCCIÓN
</template>

<script>
import { useModeStore } from '~/store/mode';

export default {
    setup() {
        const modeStore = useModeStore();
        const mode = computed(() => modeStore.mode);

        return {
            mode
        };
    },
};
</script>

<style scoped>
.skills {
    background-color: var(--theme-background-secondary);
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
} 

.skills-mode {
    height: calc(100vh - 104px);
}

.skills h1 {
    color: var(--theme-color-secondary);
}
</style>