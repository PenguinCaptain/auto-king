<script setup>
    import { useAnimations, useGLTF } from "@tresjs/cientos";
    import model from "../assets/3d/vehicle.glb";
    import { useRenderLoop } from "@tresjs/core";

    const { scene, animations } = await useGLTF(model, { draco: true });
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    let { actions, mixer } = useAnimations(animations, scene);

    const { onLoop } = useRenderLoop();
    onLoop((clock) => {
        mixer.update(clock.delta);
    });

    for (const action of Object.values(actions)) {
        action.timeScale = 0.5;
        action.play();
    }
</script>

<template>
    <primitive ref="vehicle" :object="scene" />
</template>
