<template lang="pug">
.avatar(:style="{ width: size + 'px', height: size + 'px' }")
    .image(:style="{ backgroundImage: 'url(' + image + ')' }")
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>
  
<style scoped>
.avatar {
    position: relative;
}

.image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    animation: morph 8s ease-in-out 1s infinite;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    overflow: hidden;
}

@keyframes morph {
    0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
}
</style>
  