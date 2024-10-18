<script setup>
    const nav = ref();
    const showOverlay = ref(false);

    const onNavToggle = (show) => {
        showOverlay.value = show;
        document.body.style.overflow = show ? "hidden" : "auto";
    };

    const onOverlayClicked = () => {
        nav.value.collapseMenu();
    };
</script>

<template>
    <NavBar ref="nav" @toggle="onNavToggle" />
    <main>
        <Transition name="fade">
            <div class="nav-overlay" v-show="showOverlay" @click="onOverlayClicked"></div>
        </Transition>
        <router-view> </router-view>
    </main>
    <Footer />
</template>

<style scoped>
    main {
        min-height: 100vh;
    }
    .nav-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-to,
    .fade-leave-from {
        opacity: 1;
    }
</style>

<style>
    .panel {
        height: 100%;
        width: 100%;
        padding-top: 60px;
    }
</style>
