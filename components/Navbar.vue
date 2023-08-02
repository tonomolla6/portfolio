<template lang="pug">
.navbar
    .limit.navbar-content
        CopyRight.copyright
        .block-1
            p.hello {{ $t('hello') }}

        .block-2
            .options
                nuxt-link.cursor-hover(exact-active-class="active-link" to="/") {{ $t('home') }}
                nuxt-link.cursor-hover(exact-active-class="active-link" to="/about") {{ $t('about') }}
                nuxt-link.cursor-hover(exact-active-class="active-link" to="/portfolio") {{ $t('portfolio') }}
                nuxt-link.cursor-hover(exact-active-class="active-link" to="/experience") {{ $t('experience') }}
                nuxt-link.cursor-hover(exact-active-class="active-link" to="/skills") {{ $t('skills') }}
                nuxt-link.cursor-hover(exact-active-class="active-link" to="/contact") {{ $t('contact') }}
            LangSwitch.switch.cursor-hover
</template>

<script>

</script>

<style>
.navbar {
    background-color: var(--theme-backgroud-primary);
    position: absolute;
    top: 0px;
    width: 100vw;
    color: var(--theme-color-secondary);
    height: 104px;
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
}

p.hello {
    font-size: 48px;
    margin: 0px;
    text-transform: uppercase;
    font-weight: bold;
}

.block-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 560px;
}

.block-2 a {
    text-decoration: none;
    color: var(--theme-color-secondary);
    text-transform: uppercase;
    font-size: 16px;
    padding: 10px;
    box-shadow: inset 0 0 0 0 var(--theme-color-secondary);
    margin: 10px;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    font-weight: 500;
}

.block-2 a:hover {
    cursor: pointer;
    color: var(--theme-backgroud-primary);
    box-shadow: inset 200px 0 0 0 var(--theme-color-secondary);
}

.copyright {
    position: absolute;
    top: 104px;
}

.switch {
    margin-left: 20px;
}

.active-link {
    color: var(--theme-color-primary) !important;
}
</style>