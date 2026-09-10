<script setup>
import ToggleButton from './ToggleButton.vue';

defineProps({
    routeTo: String
});
</script>

<template>
    <div class="bar">
        <ToggleButton />
        <router-link
            class="items"
            :to="routeTo"
            style="text-decoration: none;"
        >
            <slot></slot>
        </router-link>
    </div>
</template>

<style scoped>
.bar {
    display: inline-grid;
    grid-template-columns: 1fr 10fr;
    margin-left: 50px;
    margin-bottom: 10px;
    padding-left: 50px;
    padding-right: 20px;
    width: 1120px;
    height: 80px;
    border-radius: 10px;
    border: 1px solid #BEBEBE;
    align-items: center;
}

.items {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.items :deep(h5) {
    font-family: 'carlito';
    font-weight: 800;
    font-size: 12pt;
    width: 150px;
    text-align: center;
    color: black;
}

.items :deep(img) {
    width: 50px;
    height: 50px;
    border-radius: 10%;
}
</style>