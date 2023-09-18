<template lang="pug">
.change-mode.cursor-hover(@click="changeMode")
    //- .tooltip(v-if="showTooltip") Prueba la versión con más control.
    svg(xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 448 512")
        path(:fill="mode == 0 ? 'black' : 'white'" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z")
</template>

<script>
import { useModeStore } from '~/store/mode';

export default {
    setup() {
        const modeStore = useModeStore();
        const mode = computed(() => modeStore.mode)
        // const showTooltip = ref(!localStorage.getItem('tooltipSeen'));

        const changeMode = () => {
            modeStore.changeMode();
            // if (showTooltip.value) {
            //     localStorage.setItem('tooltipSeen', 'true');
            //     showTooltip.value = false;
            // }
        };

        return {
            mode,
            changeMode
            // showTooltip
        };
    },
};
</script>
    
<style scoped>
.change-mode {
    position: relative;
    background-color: var(--theme-color-primary);
    padding: 15px;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
}

.tooltip {
    position: absolute;
    left: 100%;
    padding: 10px;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin-left: 10px;
    white-space: nowrap;
}

@media (max-width: 760px) {
    .change-mode {
        display: none;
    }
}
</style>