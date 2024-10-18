<script setup>
    import { Collapse } from "bootstrap";
    import { useRouter } from "vue-router";

    const emit = defineEmits(["toggle"]);

    const route = useRoute();
    const isOnHomePage = computed(() => route.name && route.name === "Home");
    const routes = useRouter().options.routes.filter((route) => route.meta && route.meta.navbar);

    const menu = ref();
    const collapseButton = ref();
    const bg = ref();

    const isMobile = useMediaQuery("(max-width: 768px)");

    const onToggle = (show) => {
        emit("toggle", show);
    };

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === "aria-expanded") {
                onToggle(collapseButton.value.getAttribute("aria-expanded") === "true");
            }
        });
    });

    onMounted(() => {
        observer.observe(collapseButton.value, { attributes: true });
    });
    onBeforeUnmount(() => {
        observer.disconnect();
    });

    const collapseMenu = () => {
        new Collapse(menu.value, { toggle: false }).hide();
    };

    defineExpose({ collapseMenu });
</script>

<template>
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img src="../assets/logo/logo-small.png" alt="logo" height="30" />
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                ref="collapseButton"
                @click="onCollapseButtonClicked"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div ref="menu" class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 ms-md-4 ms-lg-0 mb-md-0 z-3">
                    <li v-for="route in routes" :key="route.path" class="nav-item">
                        <a
                            class="nav-link"
                            :href="useRouter().resolve(route.path).href"
                            :class="{ active: isOnHomePage }"
                            v-if="route.name === 'Home'">
                            {{ route.name }}
                        </a>
                        <router-link
                            class="nav-link"
                            activeClass="active"
                            :to="route.path"
                            v-if="route.name && route.name !== 'Home'">
                            {{ route.name }}
                        </router-link>
                    </li>
                    <li class="nav-item mt-2" v-if="isMobile">
                        <router-link
                            :to="{
                                name: 'Book',
                            }"
                            class="btn btn-primary nav-link-btn">
                            Book Now
                        </router-link>
                    </li>
                </ul>
            </div>

            <div
                class="d-flex justify-content-end"
                style="position: absolute; left: 0; right: 0"
                v-if="!isMobile">
                <router-link
                    :to="{
                        name: 'Book',
                    }"
                    class="btn btn-primary me-5">
                    Book Now
                </router-link>
            </div>
        </div>
        <div class="navbar-bg" ref="bg"></div>
    </nav>
</template>

<style scoped lang="scss">
    @import "../scss/styles.scss";
    .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
    }

    .nav-link-btn {
        display: block;
        padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
        font-size: var(--bs-nav-link-font-size);
        font-weight: var(--bs-nav-link-font-weight);
        border: 0;
    }
    .navbar-brand {
        margin: 0 1rem;
    }

    .nav-item {
        margin-right: 1.5rem;
    }

    .nav-item:last-child {
        margin-right: 0;
    }

    .navbar-bg {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--bs-tertiary-bg);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    @include media-breakpoint-up(lg) {
        .navbar-nav {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
