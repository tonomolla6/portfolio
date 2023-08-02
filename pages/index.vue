<template lang="pug">
Stars
.home
    .limit.home-content
        ImageHome.image-home(:size="330" :image="'/home.jpg'")
        TextWritter.text-writter
</template>

<style scoped>
.home {
    background-color: var(--theme-backgroud-secondary);
    height: calc(100vh - 104px);
    width: 100vw;
    overflow: hidden;
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
    width: 70%;
}
</style>
