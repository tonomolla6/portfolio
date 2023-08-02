<template lang="pug">
.writter
    h1 Tono Mollá González
    p {{ selected }}<span class="cursor">|</span>
    .button.cursor-hover(@click="download") {{ $t('download-cv') }}
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const texts = computed(() => [ t('daw'), t('dam'), t('smx') ]);
const selected = ref("");

let index = 0;
let textIndex = 0;
let clear = ref(true);

const typeEffect = async () => {
    while (true) {
        clear.value = true;

        if (textIndex >= texts.value.length) textIndex = 0; // Reinicia si alcanza la última palabra
        selected.value = "";
        
        // Escribe la palabra actual
        for (index = 0; index < texts.value[textIndex].length; index++) {
            if (!clear.value)
                break;

            selected.value += texts.value[textIndex].charAt(index);
            await new Promise(res => setTimeout(res, 40)); // Espera 40 ms
        }
        await new Promise(res => setTimeout(res, 4000)); // Espera 4 segundos antes de la siguiente palabra    
        
        textIndex++;
    }
};

onBeforeMount(() => {  
    typeEffect();
});

onMounted(() => {
    if (textIndex == 0) 
        typeEffect();
})

const download = () => {
  const link = document.createElement('a');
  link.href = '/curriculum-2023.pdf';
  link.download = 'Currículum 2023.pdf'; // El nombre del archivo descargado, puedes cambiarlo si lo necesitas
  link.click();
};

// Escuchamos los cambios en el idioma y reiniciamos el efecto de escritura
watch(texts, () => {
    index = 0;
    textIndex = 0;
    selected.value = "";
    clear.value = false;
});
</script>


<style>
.writter {
    z-index: 0;
}

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
    color: var(--theme-color-primary);
    animation: blink 1s step-start infinite;
}

.button {
    text-decoration: none;
    color: var(--theme-color-secondary);
    padding: 20px;
    border: 1px solid var(--theme-color-secondary);
    margin-top: 32px;
    text-transform: uppercase;
    box-shadow: inset 0 0 0 0 var(--theme-color-secondary);
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    max-width: max-content;
    font-weight: 500;
    background-color: var(--theme-backgroud-primary);
}

.button:hover {
    cursor: pointer;
    color: var(--theme-backgroud-primary);
    box-shadow: inset 200px 0 0 0 var(--theme-color-secondary);
}

@keyframes blink {
    from, to {
        color: transparent;
    }
    50% {
        color: var(--theme-color-primary);
    }
}
</style>