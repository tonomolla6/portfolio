<template lang="pug">
.navbar
    .limit.navbar-content
        CopyRight.copyright
        .block-1
            p.hello {{ $t('hello') }}
            .hamburger.cursor-hover(@click="toggleMenu")
                svg(xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 448 512")
                    path(:fill="themeColorSecondary" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z")
        .block-2(:class="{ 'active': menuActive }")
            .close-button.cursor-hover(@click="toggleMenu")
                svg(xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 384 512")
                    path(:fill="themeColorSecondary" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z")
            .options
                nuxt-link.cursor-hover(@click="handleLinkClick" exact-active-class="active-link" to="/") {{ $t('home') }}
                nuxt-link.cursor-hover(@click="handleLinkClick" exact-active-class="active-link" to="/about") {{ $t('about') }}
                nuxt-link.cursor-hover(@click="handleLinkClick" exact-active-class="active-link" to="/portfolio") {{ $t('portfolio') }}
                nuxt-link.cursor-hover(@click="handleLinkClick" exact-active-class="active-link" to="/experience") {{ $t('experience') }}
                nuxt-link.cursor-hover(@click="handleLinkClick" exact-active-class="active-link" to="/skills") {{ $t('skills') }}
                nuxt-link.cursor-hover(@click="handleLinkClick" exact-active-class="active-link" to="/contact") {{ $t('contact') }}
            LangSwitch.switch.cursor-hover
            CopyRight(:open="true").copyright2
            .button.cursor-hover(@click="download") 
                svg(xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512")
                    path(d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z")
                p {{ wind.innerWidth > 1200 ? 'CV' : 'Currículum' }}
</template>

<script setup>
import { useTheme } from '~/store/theme';
 
const menuActive = ref(false);
const { themeColorSecondary } = useTheme();
const wind = computed(() => window);

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
  if (!menuActive.value) {
    setTimeout(() => {
      menuActive.value = false;
    }, 500);
  }
};

const download = async () => {
    const link = document.createElement('a');
    link.href = '/curriculum-default.pdf';
    link.download = 'Currículum ' + (new Date()).getFullYear() + '.pdf';
    link.click();
};

const handleLinkClick = () => {
  if (window.innerWidth <= 1200) {
    toggleMenu();
  }
};
</script>

<style scoped>
.navbar {
    background-color: var(--theme-backgroud-primary);
    position: absolute;
    top: 0px;
    width: 100vw;
    color: var(--theme-color-secondary);
    height: 104px;
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
}

p.hello {
    font-size: 48px;
    margin: 0px;
    text-transform: uppercase;
    font-weight: bold;
}

.block-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 560px;
}

.block-2 a {
    text-decoration: none;
    color: var(--theme-color-secondary);
    text-transform: uppercase;
    font-size: 16px;
    padding: 10px;
    box-shadow: inset 0 0 0 0 var(--theme-color-secondary);
    margin: 10px;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    font-weight: 500;
}

.block-2 a:hover {
    cursor: pointer;
    color: var(--theme-backgroud-primary);
    box-shadow: inset 200px 0 0 0 var(--theme-color-secondary);
}

.copyright {
    position: absolute;
    top: 104px;
}

.switch {
    margin-left: 20px;
}

.active-link {
    color: var(--theme-color-primary) !important;
}

.block-2.active {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--theme-backgroud-secondary);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--theme-color-primary);
    z-index: 2;
    overflow: hidden;
    min-width: 100%;
    opacity: 0;
    height: 100vh;
    width: 100vw;
    transition: opacity 0.5s ease-in-out;
    animation: fadeIn 0.5s forwards;
}

.block-2.active .options {
    flex-direction: column;
    display: flex;
    text-align: center;
}

.active .switch {
    margin-left: 0px;
}

.active a {
    margin: 2px 0px;
}

.block-2.active .options ul {
  list-style: none;
  padding: 0;
}

.block-2.active .options ul li {
  margin: 15px 0;
  font-size: 24px;
}

.block-2.active .close-button {
    position: absolute;
    top: 25px;
    right: 35px;
    cursor: pointer;
}

.button {
    padding: 5px 10px;
    margin: 10px;
    background: var(--theme-color-secondary) !important;
    color: var(--theme-backgroud-primary) !important;
    border: 1px solid var(--theme-color-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.button p {
    margin: 0px;
    margin-left: 10px;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 1200px) {
    .p.hello {
        display: none;
    }
    
    .block-2 {
        display: none;
    }
    
    .block-2.active {
        display: flex;
    }

    .hamburger {
        display: block;
    }

    .close-button {
        display: block;
    }

    .block-1 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .copyright {
        display: none !important;
    }

    .block-2 a {
        font-size: 23px;
    }
}

@media (min-width: 1200px) {
  .hamburger {
    display: none;
  }

  .close-button {
    display: none;
  }

  .copyright2 {
    display: none !important;
  }
}
</style>