<template lang="pug">
.pagination
    .limit
        .left.cursor-hover
            router-link(:to="{ name: previousPageName }" v-if="previousText && route.name != 'index'")
                svg(xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 320 512")
                    path(:fill="themeColorSecondary" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z")
                p {{ previousText }}
        .right.cursor-hover
            router-link(:to="{ name: nextPageName }" v-if="nextText && route.name != 'contact'")
                p {{ nextText }}
                svg(xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 320 512")
                    path(:fill="themeColorSecondary" d="M310.6 233.4c12.5 12.5-12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z")
</template>

<script setup>
import { useTheme } from '~/store/theme';

const { themeColorSecondary } = useTheme();
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
const i18n = useI18n();
const route = useRoute();

const routing = [
    {
        name: "index",
        slug: "presentation"
    },
    {
        name: "about",
        slug: "learn-more-about-me"
    },
    {
        name: "portfolio",
        slug: "projects"
    },
    {
        name: "experience",
        slug: "work-experience"
    },
    {
        name: "skills",
        slug: "all-ive-learned"
    },
    {
        name: "contact",
        slug: "send-message"
    }
];


// Encuentra la página actual en base a la ruta
const currentPageIndex = computed(() => routing.findIndex(page => page.name === route.name));

// Obtiene los textos anteriores y sucesores
const previousText = computed(() => currentPageIndex.value > 0 ? i18n.t(routing[currentPageIndex.value - 1].slug) : null);
const nextText = computed(() => currentPageIndex.value < routing.length - 1 ? i18n.t(routing[currentPageIndex.value + 1].slug) : i18n.t(routing[0].slug));

const previousPageName = computed(() => currentPageIndex.value > 0 ? routing[currentPageIndex.value - 1].name : null);
const nextPageName = computed(() => currentPageIndex.value < routing.length - 1 ? routing[currentPageIndex.value + 1].name : routing[0].name);
</script>

<style scoped>
.pagination {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 100px;
}

.limit {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.pagination .right a,
.pagination .left a {
    display: flex;
    align-items: center;
    min-width: 200px;
    text-decoration: none;
}

.pagination .right a {
    justify-content: right;
}

.pagination .left a {
    justify-content: left;
}

.pagination p {
    color: var(--theme-color-secondary);
    text-transform: uppercase;
    cursor: pointer;
    font-size: 22px;
    transition: 0.3s;
}

.pagination .right p {
    margin-right: 6px;
}

.pagination .left p {
    margin-left: 6px;
}

.pagination .right p:hover {
    margin-right: 20px;
}

.pagination .left p:hover {
    margin-left: 20px;
}

@media (max-width: 1200px) {
    .limit {
        width: calc(100% - 100px);
    }
}

@media (max-width: 760px) {
    .pagination {
        display: none;
    }
}
</style>