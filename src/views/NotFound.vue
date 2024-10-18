<script setup></script>
<template>
    <div class="container">
        <div class="panel">
            <div class="text-center">
                <h1 class="title fw-bold mt-5">404</h1>
                <h1 class="ts-5" style="margin-top: -1rem">Page Not Found</h1>
                <router-link to="/" class="btn btn-primary btn-lg mt-3">
                    <i class="bi bi-arrow-left me-2"></i>Back to Home</router-link
                >
            </div>
        </div>
    </div>
</template>

<style>
    .title {
        background-image: linear-gradient(90deg, #01edff, #009ff8);
        -webkit-text-fill-color: transparent;
        background-clip: text;

        background-size: 100%;

        font-size: calc(3.25rem + 9vw);
    }
</style>
