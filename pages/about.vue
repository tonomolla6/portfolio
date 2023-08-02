<template lang="pug">
.about
    .avatar
        h2 Reproducir con Inteligencia Artificial
        Video.cursor-hover
    
    .title-mobile 
        h1 Pequeña descripcion sobre mi
    .text
        p {{ $t('about1') }}
        p {{ $t('about2') }}
        p {{ $t('about3') }}
</template>
  
<script>
</script>

<style scoped>
html {
    height: 100%;
    overflow: hidden;
}

.about {
    background-color: var(--theme-backgroud-secondary);
    height: calc(100vh - 104px);
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px;
    padding-bottom: 80px;
} 

video {
    width: 100%;
}

.text {
    color: var(--theme-color-secondary);
    width: calc(50% - 40px);
    margin: 20px;
}

.avatar {
    width: calc(50% - 40px);
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: var(--theme-color-secondary);
    height: 100%;
    text-transform: uppercase;
}

.avatar h2 {
    position: absolute;
    top: 0px;
}

.about h1 {
    color: var(--theme-color-secondary);
}

.title-mobile {
    display: none;
}

.title-mobile h1 {
    color: white;
    text-transform: uppercase;
}

@media (max-width: 1050px) {
    .about {
        flex-direction: column;
        padding: 50px;
        padding-bottom: 170px;
    }

    .text {
        margin-top: 0px;
        width: 100%;
    }

    .avatar {
        margin-bottom: 0px;
        width: 100%;
        margin: 50px 50px 0px 50px;
    }

    .cursor-hover {
        width: 100px;
        height: 170px;
    }

    .avatar h2 {
        position: relative;
    }
}

@media (max-width: 700px) {
    .about {
        padding: 30px;
    }

    .avatar {
        margin-top: 0px;
    }
}

@media (max-width: 600px) {
    .avatar {
        display: none;
    }

    .title-mobile {
        display: block;
    }
}

@media (max-width: 475px) {
    .title-mobile h1 {
        font-size: 23px;
    }

    .text p {
        font-size: 15px;
    }
}
</style>