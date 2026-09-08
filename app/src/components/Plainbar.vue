<script setup>
import ToggleButton from './ToggleButton.vue';

</script>

<template>
    <div class="bar">
        <ToggleButton />
        <h5>Product name</h5>
        <h5>Product name</h5>
        <h5>Product name</h5>
    </div>
</template>

<style scoped>
    .bar {
        display: inline-flex;
        margin-left: 50px;
        margin-bottom: 10px;
        padding: 20px;
        width: 1120px;
        height: 50px;
        border-radius: 10px;
        border: 1px solid #BEBEBE;
        justify-content: space-between;
        align-items: center;
    }
    h5 {
        font-family: 'carlito';
        font-weight: 400;
    }
</style>
