<template lang="pug">
.home(:class="mode == 1 ? 'home-mode' : ''")
    Stars
    .content(:class="mode == 1 ? 'home-mode' : ''")
        .limit.home-content
            ImageHome.image-home(:image="'/home.jpg'")
            TextWritter.text-writter
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
.home {
    background-color: var(--theme-background-secondary);
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

.home-mode {
    height: calc(100vh - 104px);
}

.content {
    height: 100%;
    width: 100%;
}

.home-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.text-writter {
    color: var(--theme-color-secondary);
    margin-left: 70px;
    margin-bottom: 50px;
}

.image-home {
    width: 30%;
}

.text-writter {
    width: calc(70% - 40px);
    margin-right: 40px;
}

@media (max-width: 800px) {
    .image-home {
        width: 250px;
        height: 250px;
        margin: 20px 0px;
        margin-right: 40px;
    }

    .text-writter {
        width: 70%;
        margin: 0px;
    }

    .home-content {
        justify-content: right;
        flex-direction: column;
    }
    
}

@media (max-width: 640px) {
    .text-writter {
        width: 85%;
    }
}

@media (max-width: 500px) {
    .text-writter {
        width: 100%;
    }
}
</style>
