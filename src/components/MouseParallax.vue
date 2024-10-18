<script setup>
    import { useRenderLoop, useTresContext } from "@tresjs/core";
    import { useMouse, useWindowSize } from "@vueuse/core";

    const props = defineProps({
        disabled: {
            type: Boolean,
            default: false,
        },
        factor: {
            type: Number,
            default: 2.5,
        },
        ease: {
            type: Number,
            default: 0.1,
        },
    });
    const { camera } = useTresContext();

    const { disabled, factor, ease } = toRefs(props);

    const { x, y } = useMouse();
    const { width, height } = useWindowSize();

    const cameraGroupRef = ref();

    const cursorX = computed(() => (x.value / width.value - 0.5) * factor.value);
    // const cursorY = computed(() => -(y.value / height.value - 0.5) * factor.value);

    const { onLoop } = useRenderLoop();

    onLoop(({ delta }) => {
        if (disabled.value || !cameraGroupRef.value) return;
        cameraGroupRef.value.position.x += (cursorX.value - cameraGroupRef.value.position.x) * ease.value * delta;
        // cameraGroupRef.value.position.y += (cursorY.value - cameraGroupRef.value.position.y) * ease.value * delta;
    });

    watch(
        () => cameraGroupRef.value,
        (value) => value?.add(camera.value)
    );
</script>

<template>
    <TresGroup ref="cameraGroupRef" />
</template>
