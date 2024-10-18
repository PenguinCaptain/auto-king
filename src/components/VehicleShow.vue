<script async setup>
    import { EffectComposer, Bloom } from "@tresjs/post-processing";
    import { BlendFunction } from "postprocessing";
    import { watch } from "vue";

    await new Promise((r) => setTimeout(r, 1000));
    const cameraParams = {
        position: [1.1649126428341294, 1.018586264520942, 3.2328665887838635],
        rotation: [-0.5207382995061891, 0.7537831706788972, 0.374053366677032],
        fov: 60,
    };

    const cameraParamsMobile = {
        position: [1.1872965971551082, 0.5439220142096681, 4.441324731788647],
        rotation: [-0.19550027394038297, 0.2957791581121024, 0.057658742410624374],
        fov: 60,
    };

    const isMobile = useMediaQuery("(max-width: 768px)");

    watch(isMobile, () => {
        window.location.reload();
    });

    const bloomParams = {
        luminanceThreshold: 0.5,
        luminanceSmoothing: 0.5,
        intensity: 0.5,
        blendFunction: BlendFunction.ADD,
    };
</script>

<template>
    <Suspense>
        <TresCanvas ref="tresCanvas" window-size preset="realistic" clearColor="#151928">
            <TresPerspectiveCamera ref="camera" v-bind="isMobile ? cameraParamsMobile : cameraParams" />
            <TresFog :args="['#212529', 5, 8]" />
            <Suspense>
                <Ground ref="ground" />
            </Suspense>
            <Suspense>
                <Vehicle />
            </Suspense>
            <TresAmbientLight :intensity="0.5" />
            <MouseParallax v-if="!isMobile" :factor="0.5" :ease="10" />
            <EffectComposer>
                <Bloom v-bind="bloomParams" />
            </EffectComposer>
        </TresCanvas>
    </Suspense>
</template>

<style scoped>
    canvas {
        z-index: -1;
    }
</style>
