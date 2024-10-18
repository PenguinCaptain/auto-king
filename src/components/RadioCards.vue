<script setup>
    const props = defineProps({
        options: Array,
        modelValue: String,
    });
    const emit = defineEmits(["update:modelValue"]);

    const selected = ref(props.modelValue);
    const selectOption = (value) => {
        selected.value = value;
        emit("update:modelValue", value);
    };
</script>

<template>
    <div
        v-for="(option, index) in options"
        :key="index"
        class="card"
        :class="{ active: selected === option.value }"
        :data-bs-theme="selected === option.value ? 'light' : 'dark'"
        @click="selectOption(option.value)">
        <img v-if="option.img" :src="option.img" class="card-img-top" :alt="option.label" />
        <div class="card-body">
            <h5 class="card-title">{{ option.label }}</h5>

            <p class="card-text" v-if="option.text">{{ option.text }}</p>
            <input
                type="radio"
                :value="option.value"
                v-model="selected"
                :id="option.value"
                class="d-none" />
        </div>
    </div>
</template>

<style scoped>
    .card {
        cursor: pointer;
        transition: background 0.3s ease-in-out;
    }
    .card.active > img {
        filter: brightness(0.5) grayscale(0.4);
        transition: filter 0.1s ease-in-out;
    }
</style>
