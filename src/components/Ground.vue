<script setup>
    import { useRenderLoop, useTexture } from "@tresjs/core";
    import { RepeatWrapping } from "three";

    import gridTexture from "../assets/3d/grid-texture.png";
    const ground = shallowRef();
    const groundTexture = await useTexture({
        map: gridTexture,
    });

    for (const key in groundTexture) {
        if (groundTexture[key]) {
            groundTexture[key].repeat.set(30, 30);
            groundTexture[key].offset.set(0, 0);
            groundTexture[key].wrapS = RepeatWrapping;
            groundTexture[key].wrapT = RepeatWrapping;
        }
    }

    const floorOptions = {
        color: "#04C9FC",
        roughness: 0.5,
        metalness: 0.5,
        alphaMap: groundTexture.map,
        transparent: true,
        emissive: "#04c9fc",
        emissiveIntensity: 5,
        opacity: 1,
        map: groundTexture.map,
    };

    const { onLoop } = useRenderLoop();
    onLoop((clock) => {
        for (const key in groundTexture) {
            if (groundTexture[key]) {
                groundTexture[key].offset.y = -clock.elapsed % 400;
            }
        }
    });
</script>

<template>
    <TresMesh ref="ground" receive-shadow :rotation="[-Math.PI * 0.5, 0, 0]" :position="[0, 0, 0]">
        <TresPlaneGeometry :args="[35, 35]" />
        <TresMeshStandardMaterial v-bind="floorOptions" />
    </TresMesh>
</template>
