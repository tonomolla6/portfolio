<template>
    <div>
        <div ref="cursorInner" class="cursor cursor--small"></div>
        <slot></slot>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

export default {
    setup() {
        const cursorInner = ref(null);

        let updateCursorPosition;
        let updateCursor;

        onMounted(() => {
            if (cursorInner.value) {
                let mouse = { x: -100, y: -100 };

                updateCursorPosition = function(e) {
                    mouse.x = e.pageX;
                    mouse.y = e.pageY;
                }

                document.body.addEventListener('pointermove', updateCursorPosition);
                document.body.addEventListener('pointerdown', () => {
                    gsap.to(cursorInner.value, 0.15, { scale: 2 });
                });
                document.body.addEventListener('pointerup', () => {
                    gsap.to(cursorInner.value, 0.15, { scale: 1 });
                });

                // Inicia la observación de cambios en el DOM
                const observer = new MutationObserver(() => {
                    updateCursorHoverEvents();
                });
                observer.observe(document.body, { childList: true, subtree: true });

                function updateCursorHoverEvents() {
                    const hoverElements = document.querySelectorAll('.cursor-hover');

                    // Agregar eventos de mouseover y mouseout a esos elementos
                    hoverElements.forEach(el => {
                        el.addEventListener('mouseover', () => {
                            gsap.to(cursorInner.value, 0.15, { background: localStorage.getItem('themeColorPrimary') });
                        });
                        el.addEventListener('mouseout', () => {
                            gsap.to(cursorInner.value, 0.15, { background: localStorage.getItem('themeColorSecondary') });
                        });
                    });
                }

                updateCursor = function() {
                    if(cursorInner.value) {
                        gsap.to(cursorInner.value, { x: mouse.x, y: mouse.y, duration: 0.01 });
                        requestAnimationFrame(updateCursor);
                    }
                }

                updateCursorHoverEvents();
                updateCursor();
            }
        });

        onUnmounted(() => {
            document.body.removeEventListener('pointermove', updateCursorPosition);
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

.cursor--small {
    --size: 9.6px;
    background: var(--theme-color-secondary);
    transform: translate(-50%, -50%);
}
</style>