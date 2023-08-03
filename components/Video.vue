<template>
    <div style="display: flex; justify-content: center; align-items: center;" class="video-box">
        <a v-if="!videoVisible" style="display: flex; justify-content: center; align-items: center;" @click="showVideo">
            <div class="play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 0 384 512">
                    <path fill="white" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                </svg>
            </div>
        </a>
        <video v-if="videoVisible" controls>
            <source :src="videoSource" type="video/mp4" />
            <p>Tu navegador no soporta la reproducción de videos. Por favor actualízalo o utiliza otro navegador.</p>
        </video>
    </div>
</template>
  
<script setup>
import { useI18n } from "vue-i18n";

const videoVisible = ref(false);
const { locale } = useI18n();
const videoSource = ref(`/about.mp4`);

const updateVideoSource = () => {
    videoSource.value = locale.value === 'es' ? '/sobre.mp4' : '/about.mp4';
    // Reset the video visibility when the language changes
    videoVisible.value = false;
};

watchEffect(updateVideoSource);

const showVideo = () => {
    videoVisible.value = true;
};
</script>
  
  
<style>
.video-box img {
    width: 100%;
}

.video-box .play-btn {
    background: var(--theme-color-primary);
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 50%;
}

.video-box .play-btn svg {
    color: white;
    position: absolute;
    left: 25px;
    top: 10px;
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
  