<script setup>
 
    const button = defineProps({
        buttonName: String,
        backgroundColor: String,
        color: String
    })

</script>

<template>
    <div class="button">
        <p class="text">{{ button.buttonName }}</p>
    </div>
</template>

<style scoped>
    .text {
        color : v-bind('button.color');
        text-align: center;
        font-size: 10pt;
        font-family: 'roboto';
        font-weight: 500;
    }
    .button {
        background-color: v-bind('button.backgroundColor');
        margin-left: auto;
        display: flex;
        width: 150px;
        height: 30px;
        border: 1px solid v-bind('button.backgroundColor ?? button.color');
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>
