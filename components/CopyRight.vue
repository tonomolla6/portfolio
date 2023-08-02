<template lang="pug">
.footer
    div(@click="toggleText")
        .block(v-if="!isOpen")
            svg(xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512")
                path(d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z")
        .block(v-else)
            svg(xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512")
                path(d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z")
    p.open(v-if="isOpen") Esta web está diseñada, desarrollada y desplegada por mi, 
        a.link(href="https://github.com/tonomolla6/portfolio" target="_blank") código fuente.
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isOpen = ref(false);

    const toggleText = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleText,
    };
  },
};
</script>

<style scoped>
.block {
    padding: 5px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s;
}

.block:hover {
    padding: 10px;
    background-color: red;
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    margin: 0px;
}

.open {
    margin-left: 10px;
    animation: slideDown 0.1s ease-in-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>