<script setup>
    import ToggleButton from './ToggleButton.vue';
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        name: String,
        category: String,
        supplier: String,
        quantity: Number,
        amount: Number,
        routeTo: String
    })
</script>

<template>
    <div class="bar">
        <ToggleButton />
        <router-link class="items" :to="props.routeTo" style="text-decoration: none;">
            <h5>{{ props.name }}</h5>
            <h5>{{ props.category }}</h5>
            <h5>{{ props.supplier }}</h5>
            <h5>{{ props.quantity }}</h5>
            <h5>{{ props.amount }}</h5>
        </router-link>
    </div>
</template>

<style scoped>
    .bar {
        display: inline-grid;
        grid-template-columns: 1fr 5fr;
        grid-template-rows: 1fr;
        margin-left: 50px;
        margin-bottom: 10px;
        padding: 20px;
        width: 1120px;
        height: 80px;
        border-radius: 10px;
        border: 1px solid #BEBEBE;
        justify-content: space-between;
        align-items: center;
    }
    h5 {
        font-family: 'carlito';
        font-weight: 800;
        font-size: 12pt;
        width: 100px;
        text-align: center;
        color: black;
    }
    .items {
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
