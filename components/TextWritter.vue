<template lang="pug">
.writter
    h1 Tono Mollá González
    p {{ selected }}<span class="cursor">|</span>
    .button.cursor-hover {{ $t('download-cv') }}
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const texts = [ t('daw'), t('dam'), t('smx') ];
const selected = ref("");

let index = 0;
let textIndex = 0;
let timeout;

const typeEffect = () => {
    if (textIndex < texts.length) {
        if (index < texts[textIndex].length) {
            selected.value += texts[textIndex].charAt(index);
            index++;
            timeout = setTimeout(typeEffect, 40); // Controla la velocidad de escritura
        } else {
            index = 0;
            setTimeout(() => {
                textIndex++;
                selected.value = "";
                if (textIndex >= texts.length) {
                    textIndex = 0; // Reinicia textIndex si alcanza la última palabra
                }
                typeEffect();
            }, 4000); // Espera 1 segundo antes de escribir la siguiente palabra
        }
    }
};

onMounted(() => {
    typeEffect();
});

</script>

<style>
/* Aquí puedes agregar cualquier estilo que quieras aplicar a tu componente */
.writter h1 {
    font-weight: 900;
    font-size: 64px;
    margin: 0px;
}

.writter p {
    font-size: 32px;
    margin: 0px;
}

.cursor {
    color: var(--theme-color);
    animation: blink 1s step-start infinite;
}

.button {
    text-decoration: none;
    color: white;
    padding: 20px;
    border: 1px solid white;
    margin-top: 32px;
    text-transform: uppercase;
    box-shadow: inset 0 0 0 0 white;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    max-width: max-content;
    font-weight: 500;
}

.button:hover {
    cursor: none;
    color: #111;
    box-shadow: inset 200px 0 0 0 white;
}

@keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: var(--theme-color);
    }
}
</style>