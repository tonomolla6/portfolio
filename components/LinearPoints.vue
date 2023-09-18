<template lang="pug">
.linear-points
    .point(v-for="point in points" :key="point.title")
        .primary-content
            img(:src="'/'+point.logo" :alt="point.title")
            div(class="point-description")
                p.title {{ point.title }}
                p {{ point.type + (point.cargo != null ? " - " + point.cargo : '') }} 
                .dates 
                    p {{ point.start + ' - ' + (point.end == null ? 'Actualidad' : point.end) }}
        .secondary-content
            p(v-html="activeStates[point.start] ? point.description.join('<br/><br/>') : point.desc")
            a.cursor-hover(@click="toggleActive(point.start)") {{ activeStates[point.start] ? 'Ver menos' : 'Ver mas' }}
</template>

<script>
export default {
    props: {
        points: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        // Creamos un objeto reactive que mapea los títulos de los puntos a su estado "active"
        const activeStates = reactive({});

        // Inicializamos los estados "active" para cada punto
        props.points.forEach(point => {
            activeStates[point.start] = ref(false);
        });

        // Función para cambiar el estado "active" de un punto
        const toggleActive = pointStart => {
            activeStates[pointStart] = !activeStates[pointStart];
        };

        return {
            activeStates,
            toggleActive
        }
    }
};
</script>
    
<style scoped>
.linear-points {
    border-left: 10px solid var(--theme-color-primary);
}
.primary-content {
    display: flex;
    align-items: center;
    position: relative;
}

.primary-content::before {
    content: "";
    position: absolute;
    left: 0px;
    top: calc(50% - 5px);
    height: 10px;
    width: 15px;
    background-color: var(--theme-color-primary);
}

img {
    width: 80px;
    height: 80px;
    background: white;
    padding: 10px;
    margin: 0px 15px;
    border-radius: 100%;
    position: relative;
    z-index: 1;
}

.point {
    display: flex;
    margin: 20px 0px 20px 0px;
    align-items: start;
    flex-direction: column;
}

.point-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
}

.point-description p.title {
    margin: 0px;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--theme-color-secondary);
}

.point-description p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0px;
    color: var(--theme-color-secondary);
}

.secondary-content a {
    cursor: pointer;
}

.secondary-content a:hover {
    color:var(--theme-color-primary);
}

.secondary-content {
    margin-left: 20px;
    text-align: left;
}

</style>