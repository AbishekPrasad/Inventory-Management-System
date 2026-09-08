<script setup>
    const button = defineProps({
        buttonName: String,
        color: String,
        fontColor: String
    })
</script>

<template>
    <div class="button">
        <p class="text" :style="{ color : button.fontColor}">{{ button.buttonName }}</p>
    </div>
</template>

<style scoped>
    .text {
        text-align: center;
        font-size: 10pt;
        font-family: 'roboto';
        font-weight: 700;
    }
    .button {
        margin-left: auto;
        display: flex;
        width: 150px;
        height: 30px;
        border: 1px solid v-bind('button.color');
        border-radius: 50px;
        align-items: center;
        justify-content: center;
    }
</style>
