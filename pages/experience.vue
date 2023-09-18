<template lang="pug">
.experience(:class="mode == 1 ? 'experience-mode' : ''", ref="container")
    .limit
        .part.left(:class="{'no-hover': isNoneHovered || isRightPinned, 'pinned': isLeftPinned, 'shrinked': isRightPinned, 'fixed': isCenterPinned}", @mouseenter="handleMouseEnterLeft", @mouseleave="handleMouseLeaveLeft")
            .pin(v-if="(!isNoneHovered && isLeftHovered && !isRightPinned && !isCenterPinned) || isLeftPinned" @click="handleClickPin('left')")
                svg(xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 384 512")
                    path(:fill="!isLeftPinned ? 'black' : 'white'" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z")
            h1 Trayectoria laboral
            div.hover-area
                transition
                    .intro(v-if="((!isLeftHovered && !isLeftPinned) || isRightPinned) && !isCenterPinned")
                        svg(xmlns="http://www.w3.org/2000/svg" height="200px" viewBox="0 0 448 512")
                            path(fill="var(--theme-color-primary)" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z")
                transition
                    .content(v-if="(isLeftHovered || isLeftPinned) && !isRightPinned || isCenterPinned") 
                        LinearPoints(:points="points_work")
        .separator
            .stick
            .pin.middle(v-if="(isNoneHovered && !isLeftPinned && !isRightPinned) || isCenterPinned" @click="handleClickPin('center')" :class="{'pinned': isCenterPinned}")
                svg(xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 384 512")
                    path(:fill="!isCenterPinned ? 'black' : 'white'" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z")
        .part.right(:class="{'no-hover': isNoneHovered || isLeftPinned, 'pinned': isRightPinned, 'shrinked': isLeftPinned, 'fixed': isCenterPinned}", @mouseenter="handleMouseEnterRight", @mouseleave="handleMouseLeaveRight")
            .pin(v-if="(!isNoneHovered && isRightHovered && !isLeftPinned && !isCenterPinned) || isRightPinned" @click="handleClickPin('right')")
                svg(xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 384 512")
                    path(:fill="!isRightPinned ? 'black' : 'white'" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z")
            h1 Trayectoria academica
            div.hover-area
                transition
                    .intro(v-if="((!isRightHovered && !isRightPinned) || isLeftPinned) && !isCenterPinned")
                        svg(xmlns="http://www.w3.org/2000/svg" height="200px" viewBox="0 0 448 512")
                            path(fill="var(--theme-color-primary)" d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z")
                transition
                    .content(v-if="(isRightHovered || isRightPinned) && !isLeftPinned || isCenterPinned")
                        LinearPoints(:points="points_academy")
</template>

<script>
import { ref, computed } from 'vue';
import { useModeStore } from '~/store/mode';

export default {
    setup() {
        const modeStore = useModeStore();
        const mode = computed(() => modeStore.mode);
        const isLeftHovered = ref(false);
        const isRightHovered = ref(false);
        const isLeftPinned = ref(false);
        const isRightPinned = ref(false);
        const isCenterPinned = ref(false);

        const handleMouseEnterLeft = () => {
            isLeftHovered.value = true;
        };

        const handleMouseLeaveLeft = () => {
            isLeftHovered.value = false;
        };

        const handleMouseEnterRight = () => {
            isRightHovered.value = true;
        };

        const handleMouseLeaveRight = () => {
            isRightHovered.value = false;
        };

        const isNoneHovered = computed(() => !isLeftHovered.value && !isRightHovered.value)
        const handleClickPin = (side) => {
            console.log("pinned")
            if (side === 'left') {
                isLeftPinned.value = !isLeftPinned.value;
            } else if (side === 'right') {
                isRightPinned.value = !isRightPinned.value;
            } else if (side === 'center') {
                isCenterPinned.value = !isCenterPinned.value;
            }
        };

        const points_work = [
            {
                "title": "Beply",
                "logo": "beply.png",
                "type": "Jornada Completa",
                "cargo": "Fundador",
                "start": "01/12/2020",
                "end": null,
                "desc": "Como desarrollador de software, orquesto soluciones tecnológicas utilizando Docker, GithubCI/CD, Vue3...",
                "description": [
                    "Como desarrollador de software principal, lidero el diseño y la implementación de soluciones tecnológicas de alto rendimiento, utilizando un conjunto diverso de tecnologías, incluyendo Docker, GithubCI/CD, Vue3 CLI, Pug, Nginx, Redis, MySQL y NodeJS.",
                    "Este rol requiere un profundo conocimiento técnico, habilidades de gestión de proyectos y la capacidad para desarrollar y mantener sistemas eficientes y escalables. En el proceso, adquiero una gran experiencia y competencia en el uso de estas tecnologías, lo que me permite desarrollar soluciones sólidas y eficientes para una variedad de problemas complejos.",
                    "Además de mi trabajo de desarrollo, también llevo a cabo numerosas integraciones con WikiJS, Redmine y Facturascripts. Estas integraciones requieren una cuidadosa planificación y ejecución, y son esenciales para mejorar la eficiencia y la funcionalidad de nuestros sistemas.",
                    "En todo momento, mantengo un alto compromiso con la seguridad y la privacidad de los datos. Implemento numerosas medidas de seguridad y trabajo para garantizar que todas nuestras prácticas cumplan con las normas de privacidad de datos más recientes."
                ]
            },
            {
                "title": "Gestiweb Integración de Soluciones Web, SL",
                "logo": "gestiweb.png",
                "type": "Jornada Completa",
                "cargo": "Desorrollador de aplicaciones web",
                "start": "01/03/2022",
                "end": null,
                "desc": "Integraciones con PHP de marketplaces, stock, orders, invoices, products, etc. Mantenimiento de libreria Vue 3,  Github, PostgreSQL...",
                "description": [
                    "Lidero integraciones con marketplaces como Mirakle, Prestashop, Shopify, Promofarma y desarrollo más módulos para Beply utilizando PHP en el backend de Facturascripts.",
                    "Estas integraciones requieren una profunda comprensión técnica y habilidades de coordinación para asegurar la interoperabilidad y eficiencia.",
                    "Mi papel también incluye la revisión y optimización de código, asegurando mejores prácticas y manteniendo un alto estándar de calidad.",
                    "Colaboro estrechamente con otros equipos y stakeholders para garantizar la entrega a tiempo y cumplir con las expectativas del cliente."
                ]
            },
            {
                "title": "Tag Ingenieros Consultores, SL",
                "logo": "tag.jpg",
                "type": "Jornada Completa",
                "cargo": "Desorrollador de aplicaciones web",
                "start": "01/06/2020",
                "end": "01/05/2021",
                "desc": "Desarrollo de plugins para FacturaScripts y aplicaciones SPA con Vue3...",
                "description": [
                    "Me centré en el desarrollo de plugins para FacturaScripts en el backend, utilizando tecnologías como PHP, PostgreSQL y otros.",
                    "Diseñé y desarrollé una aplicación SPA (Single Page Application) para el control de stock utilizando Vue3 en el frontend, complementada con tecnologías como CSS, HTML y jQuery.",
                    "Trabajé en estrecha colaboración con el equipo de diseño para implementar interfaces de usuario optimizadas y responsive.",
                    "A lo largo del proyecto, aseguré la calidad del código y la eficiencia de las soluciones implementadas, mientras mantenía un compromiso constante con la seguridad y privacidad de los datos."
                ]
            },
            {
                "title": "Gestiweb Integración de Soluciones Web, SL",
                "logo": "gestiweb.png",
                "type": "Jornada Completa",
                "cargo": "Backend Developer",
                "start": "01/11/2018",
                "end": "01/05/2019",
                "desc": "Mantenimiento de páginas web clásicas...",
                "description": [
                    "Me encargué del mantenimiento de páginas web clásicas utilizando tecnologías como CSS, HTML, MySQL, PostgreSQL, PHP y jQuery.",
                    "Mi papel requería la identificación y corrección de errores, así como la implementación de nuevas características según las necesidades del cliente.",
                    "Trabajé en estrecha colaboración con otros equipos y stakeholders para garantizar la continuidad y estabilidad de las páginas web bajo mi responsabilidad.",
                    "Aseguré que todas las soluciones implementadas fueran seguras, eficientes y cumplieran con las expectativas de los clientes."
                ]
            }
        ];


        const points_academy = [
            {
                "title": "Ingenieria Informatica",
                "logo": "ua.jpeg",
                "type": "Universidad de Alicante",
                "cargo": "Carrera",
                "start": "01/08/2021",
                "end": null,
                "active": false,
                "desc": "Formación técnica avanzada y multidisciplinaria en sistemas informáticos.",
                "description": [
                    "Adquisición de conocimientos en arquitectura de computadoras, sistemas operativos, redes, y técnicas avanzadas de programación. Enfoque en metodologías ágiles, gestión de proyectos tecnológicos, y diseño de soluciones escalables.",
                    "Formación especializada en áreas emergentes como inteligencia artificial, sistemas embebidos y seguridad informática, con un enfoque también en la ética profesional, gestión de equipos y innovación tecnológica."
                ]
            },
            {
                "title": "Desarrollador de Aplicaciones Multiplataforma",
                "logo": "sanvi.png",
                "type": "IES San Vicente",
                "cargo": "Grado Superior",
                "start": "01/08/2023",
                "end": null,
                "active": false,
                "desc": "Diseño y desarrollo de aplicaciones para sistemas Android e iOS.",
                "description": [
                    "Profundización en el uso de frameworks como Flutter y React Native para el desarrollo de aplicaciones. Aprendizaje sobre integración con APIs, servicios externos y técnicas de optimización para asegurar el rendimiento en distintos dispositivos."
                ]
            },
            {
                "title": "Desarrollador de Aplicaciones Web",
                "logo": "iest.png",
                "type": "IES San Vicente",
                "cargo": "Grado Superior",
                "start": "01/08/2019",
                "end": "01/06/2021",
                "active": false,
                "desc": "Dominio en desarrollo frontend y backend con diversas tecnologías y herramientas modernas.",
                "description": [
                    "Dominio en programación avanzada utilizando lenguajes y frameworks como Java, PHP, Django, Go, Laravel, React, Angular y Vue.js. Experiencia en la implementación de flujos de CI/CD con Github Actions, Docker-compose, y Kubernetes.",
                    "Desarrollo de habilidades en diseño y elaboración de casos de uso, esquematización con YML, y gestión eficiente de bases de datos con herramientas contemporáneas."
                ]
            },
            {
                "title": "Tecnico en Sistemas Microinformaticos y redes",
                "logo": "iest.png",
                "type": "IES San Vicente",
                "cargo": "Grado Medio",
                "start": "01/08/2017",
                "end": "01/06/2019",
                "active": false,
                "desc": "Instalación, configuración y mantenimiento de sistemas y redes.",
                "description": [
                    "Conocimientos prácticos en gestión de servidores, tanto en entornos Windows como Linux. Implementación y manejo de protocolos de red, VPNs, y herramientas para diagnóstico y resolución de problemas en hardware y software."
                ]
            }
        ];

        return {
            mode,
            handleMouseEnterLeft,
            handleMouseLeaveLeft,
            handleMouseEnterRight,
            handleMouseLeaveRight,
            handleClickPin,
            isLeftHovered,
            isRightHovered,
            isNoneHovered,
            isLeftPinned,
            isRightPinned,
            isCenterPinned,
            points_academy,
            points_work
        };
    },
};
</script>
    

<style scoped>
.experience {
    background-color: var(--theme-background-secondary);
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

.limit {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0px 60px 0px 0px; */
    height: 100%;
}

.pin {
    position: absolute;
    background-color: var(--theme-color-primary);
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: white;
}

.fixed {
    width: 50% !important;
}

.right .pin {
    left: 20px;
    top: 23px;
    z-index: 3;
}

.left .pin {
    right: 20px;
    top: 23px;
    z-index: 3;
}

.experience-mode {
    height: calc(100vh - 104px);
}

.experience h1 {
    position: absolute;
    top: 25px;
}

.part {
    height: 100%;
    width: 50%;
    transition: width 1.3s ease-in-out;
    overflow: hidden;
    padding: 30px 0px;
    position: relative;
}

.hover-area {
    height: calc(100% - 130px);
    margin-top: 70px;
    width: 100%;
    overflow-y: scroll;
}

.intro {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.part.left.shrinked,
.part.right.shrinked {
    width: 30% !important;
}

.part.left:hover,
.part.right:hover {
    width: 70%;
}

.part.left:not(:hover),
.part.right:not(:hover) {
    width: 30%;
}

.part.left.no-hover,
.part.right.no-hover {
    width: 50%;
}

.separator {
    height: 100%;
    position: relative;
    width: 70px;
    display: flex;
    justify-content: center;
}

.separator .stick {
    width: 5px;
    height: 100%;
    background-color: var(--theme-background-primary-not);
}

.middle {
    position: absolute;
    top: 23px;
}

.experience h1 {
    color: var(--theme-color-secondary);
    text-transform: uppercase;
    position: absolute;
    top: 25px;
}

.part.left.pinned,
.part.right.pinned {
    width: 70%;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.right {
    display: flex;
    align-items: end;
    text-align: right;
    flex-direction: column;
}

@media (max-width: 1050px) {
    .experience {
        padding: 0px 60px 0px 0px;
    }
}
</style>
