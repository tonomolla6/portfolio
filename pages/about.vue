<template lang="pug">
.about
    .avatar
        h2 {{ $t('play-ia') }}
        Video.cursor-hover
    
    .text
        p {{ $t('about1') }}
        p {{ $t('about2') }}
        p {{ $t('about3') }}
</template>

<style>
.about {
    height: 100%;
    overflow: initial;
}
</style>

<style scoped>

.about {
    background-color: var(--theme-backgroud-secondary);
    min-height: calc(100vh - 104px);
    width: 100%;
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
    align-items: center;
    flex-direction: column;
    position: relative;
    color: var(--theme-color-secondary);
    height: 100%;
    text-transform: uppercase;
}

.about h1 {
    color: var(--theme-color-secondary);
}

.title-mobile {
    display: none;
}

.cursor-hover {
    height: 300px;
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
        height: 200px;
    }

    .avatar h2 {
        position: relative;
    }

    .about {
        padding: 30px;
        padding-top: 0px;
        padding-bottom: 50px;
    }

    .avatar {
        margin-top: 0px;
    }
}

@media (max-width: 700px) {
    .about {
        padding: 30px;
        padding-top: 0px;
    }

    .avatar {
        margin-top: 0px;
    }
}

@media (max-width: 600px) {
    /* .avatar {
        display: none;
    }

    .title-mobile {
        display: block;
    } */
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