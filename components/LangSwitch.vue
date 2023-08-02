<template lang="pug">
.wrapper
    label.like-switch-label
        input.like-switch(type="checkbox" v-model="isChecked" @change="toggleLanguage")
        .switch-cover
            span.switch-lang.switch-lang--en(:class="{ 'checked': currentLang === langs[1] }") {{ langs[0] }}
            span.switch-lang.switch-lang--es(:class="{ 'checked': currentLang === langs[0] }") {{ langs[1] }}
            .switch-circle
</template>
  
<script setup>
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const isChecked = ref(i18n.locale.value === i18n.availableLocales[1].code);
const currentLang = ref(i18n.locale.value);

const langs = i18n.availableLocales.map(locale => locale);

watchEffect(() => {
    currentLang.value = isChecked.value ? langs[0] : langs[1];
});

const toggleLanguage = () => {
    i18n.locale.value = isChecked.value ? langs[0] : langs[1];
};
</script>
  
<style scoped>
.like-switch-label__text {
  display: block;
  margin-right: 20px;
  font-size: 22px;
}
.like-switch-label {
  display: flex;
  align-items: center;
  margin: 16px 0;
}
.like-switch {
  position: absolute;
  opacity: 0;
}
.like-switch:checked + .switch-cover > .switch-circle {
  transform: translate3d(34px, 0, 0);
}
.like-switch:checked + .switch-cover > .switch-lang--en {
  opacity: 0;
}
.like-switch:checked + .switch-cover > .switch-lang--es {
  opacity: 1;
}
.switch-cover {
    width: 68px;
    height: 34px;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.4s;
    padding: 6px;
    border: 1px solid var(--theme-color-secondary);
    position: relative;
}

.switch-circle {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: var(--theme-color-primary);
  transition: transform 0.4s ease;
  pointer-events: none;
  position: relative;
  z-index: 2;
  top: 1.1px;
}

.switch-lang {
  position: absolute;
  top: 6px;
  color: var(--theme-color-secondary);
  transition: opacity 0.2s;
}

.switch-lang--en {
    top: 2.5px;
    right: 13px;
}

.switch-lang--es {
    left: 13px;
    top: 2.5px;
    opacity: 0;
}

.switch-lang.checked {
    opacity: 1;
}
</style>
  