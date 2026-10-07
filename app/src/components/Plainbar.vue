<script setup>
import ToggleButton from './ToggleButton.vue';

const props = defineProps({
    routeTo: String,
    image: String,
    name: String,
    category: String
});
</script>

<template>
    <div class="bar">
        <router-link
            class="items"
            :to="routeTo"
            style="text-decoration: none;"
        > 
        <div class="box">
            <img :src="image">
                <div class="display">
                    <h4 style="font-weight: 800;">{{ name }}</h4>
                    <p>{{ category }}</p>
                </div>
        </div>
            <slot></slot>
        </router-link>
    </div>
</template>

<style scoped>
h4, p {
    color: black;
    font-family: 'carlito';
    font-size: 11pt;
}

.box {
    display: flex;
    gap: 20px;
    width: 150px;
}

.display{
    display: flex;
    flex-direction: column;
    float: left;
    justify-content: center;
}

.bar {
    display: flex;
    gap: 100px;
    width: 1132px;
    height: 100px;
    justify-content: space-evenly;
    gap: 100px;
    align-items: center;
    box-shadow: 1px 1px 2px rgb(235, 235, 235);
    padding-left: 50px;
}

.items {
    display: flex;
    justify-content: space-evenly;
    gap: 120px;
    align-items: center;
}

.items :deep(h5) {
    font-family: 'carlito';
    font-weight: 100;
    font-size: 11pt;
    width: auto;
    text-align: center;
    color: black;
    width: 100px;
}

.items :deep(img) {
    width: 80px;
    height: 80px;
    border-radius: 10%;
}
</style>