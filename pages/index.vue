<template lang="pug">
.home
    .limit.home-content
        ImageHome.image-home(:size="330" :image="'/home.jpg'")
        TextWritter(:texts="texts").text-writter
</template>

<script scoped>
const texts = ['daw', 'dam', 'smx'];
</script>

<style>
.home {
    background-color: #111;
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
    color: white;
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
