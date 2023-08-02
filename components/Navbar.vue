<template lang="pug">
.navbar
    .limit.navbar-content
        CopyRight.copyright
        .block-1
            p.hello {{ $t('hello') }}

        .block-2
            .options
                nuxt-link.cursor-hover(to="/") {{ $t('home') }}
                nuxt-link.cursor-hover(to="/about") {{ $t('about') }}
                nuxt-link.cursor-hover(to="/portfolio") {{ $t('potfolio') }}
                nuxt-link.cursor-hover(to="/experience") {{ $t('experience') }}
                nuxt-link.cursor-hover(to="/skills") {{ $t('skills') }}
                nuxt-link.cursor-hover(to="/contact") {{ $t('contact') }}
            LangSwitch.switch.cursor-hover
</template>

<script>

</script>

<style>
.navbar {
    background-color: black;
    position: absolute;
    top: 0px;
    width: 100vw;
    color: white;
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
    color: white;
    text-transform: uppercase;
    font-size: 16px;
    padding: 10px;
    box-shadow: inset 0 0 0 0 white;
    margin: 10px;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    font-weight: 500;
}

.block-2 a:hover {
    cursor: none;
    color: #111;
    box-shadow: inset 200px 0 0 0 white;
}

.copyright {
    position: absolute;
    top: 104px;
}

.switch {
    margin-left: 20px;
}
</style>