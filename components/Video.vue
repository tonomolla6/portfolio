<template>
    <div class="video-box">
        <a v-if="!videoVisible" @click="toggleVideo">
            <div class="play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 384 512">
                    <path fill="white" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                </svg>
            </div>
            <div class="restart-btn" @click="restartVideo">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg>
            </div>
        </a>
        <video ref="videoRef" class="video-js" @click="toggleVideo">
            <source :src="videoSource" type="video/mp4" />
            <p>Tu navegador no soporta la reproducción de videos. Por favor actualízalo o utiliza otro navegador.</p>
        </video>

    </div>
</template>
  
<script setup>
import { useI18n } from "vue-i18n";
import { ref } from 'vue';

const videoVisible = ref(false);
const { locale } = useI18n();
const videoSource = ref(`/sobre.mp4`);
const videoRef = ref(null);

const toggleVideo = () => {
    videoVisible.value = !videoVisible.value;
    if (videoVisible.value) {
        videoRef.value.play();
    } else {
        videoRef.value.pause();
    }
};

const restartVideo = () => {
    if (videoRef.value) {
        videoRef.value.currentTime = 0;
        videoRef.value.play();
    }
};

watch(locale, (val) => {
    videoVisible.value = false;
    videoSource.value = val === 'es' ? `/sobre.mp4` : `/about.mp4`;
    videoRef.value.load();
});
</script>
  
  
<style>
.video-box {
    height: 280px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.video-box a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #0000009c;
}

.video-js {
    width: 500px;
    height: 280px;
}

.video-box img {
    width: 100%;
}

.video-box .play-btn {
    background: var(--theme-color-primary);
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 50%;
}

.video-box .play-btn svg {
    color: white;
    position: absolute;
    left: 12.5px;
    top: 5px;
}

.video-box .play-btn:before,
.video-box .play-btn:after {
    content: '';
    position: absolute;
    border: 2px solid var(--theme-color-primary);
    border-radius: 50%;
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    animation: animate 1.5s linear infinite;
    opacity: 0;

}

.video-box .play-btn:after {
    animation-delay: 0.5s
}

video {
    width: 77%;
}

.restart-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 2; /* Asegúrate de que esté por encima del video */
}

.restart-btn svg {
    fill: white; /* Color del SVG */
    width: 24px; /* Tamaño del SVG */
    height: 24px;
}

@media (max-width: 1300px) {
    video {
        width: 100%;
    }
}

@media (max-width: 1050px){
    video {
        width: 322px;
    }
}

@keyframes animate {
    0% {
        transform: scale(.5);
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: scale(1.5);
    }
}</style>
  