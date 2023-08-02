<template>
    <div>
        <div ref="cursorInner" class="cursor cursor--small"></div>
        <slot></slot> <!-- Aquí irán los contenidos de la vista donde utilices el componente -->
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

export default {
    setup() {
        const cursorInner = ref(null);

        onMounted(() => {

            if (cursorInner.value) { // Ensure they are not null

                let isStuck = false;
                let mouse = { x: -100, y: -100 };

                document.body.addEventListener('pointermove', updateCursorPosition);
                document.body.addEventListener('pointerdown', () => {
                    gsap.to(cursorInner.value, 0.15, { scale: 2 });
                });
                document.body.addEventListener('pointerup', () => {
                    gsap.to(cursorInner.value, 0.15, { scale: 1 });
                });

                function updateCursorPosition(e) {
                    mouse.x = e.pageX;
                    mouse.y = e.pageY;
                }

                function updateCursor() {
                    gsap.set(cursorInner.value, { x: mouse.x, y: mouse.y });
                    requestAnimationFrame(updateCursor);
                }

                updateCursor();
            }
        });

        return {
            cursorInner,
        };
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.cursor {
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 100;
}

.cursor--large {
    --size: 24px;
    border: 2px solid #fff;
}

.cursor--small {
    --size: 9.6px;
    background: #fff;
    transform: translate(-50%, -50%);
}
</style>