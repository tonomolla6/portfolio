<template lang="pug">
.writter
    h1 Tono Mollá
    p {{ selected }}<span class="cursor">|</span>
    .button {{ $t('download-cv') }}
</template>
    
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const texts = [t('daw'), t('dam'), t('smx')];
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
    animation: blink 1s step-start infinite;
}

.button {
    width: max-content;
    padding: 20px;
    border: 1px solid white;
    margin-top: 32px;
    text-transform: uppercase;
}

.button:hover {
    cursor: pointer;
}

@keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: inherit;
    }
}
</style>