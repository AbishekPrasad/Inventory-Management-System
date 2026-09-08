<script setup>
    import { ref } from 'vue';

    const backgroundColor = ref('white')
    const circleColor = ref('#8E2D35')
    const margin = ref(0)
    
    function whileClick(){
        if(backgroundColor.value === 'white') {
            backgroundColor.value = "#8E2D35"
            circleColor.value = "white"
            margin.value = 'auto'
        }
        else{
            backgroundColor.value = "white"
            circleColor.value = "#8E2D35"
            margin.value = 0
        }
    }

</script>

<template>
    <div class="background" @click="whileClick">
        <div class="circle">

        </div>
    </div>
</template>

<style scoped>
    .background {
        display: flex;
        height: 20px;
        width: 40px;
        background-color: v-bind(backgroundColor);
        border: 1px solid #8E2D35;
        border-radius: 50px;
        align-items: center;
        padding: 2px;
        cursor: pointer;
    }
    .circle {
        height: 15px;
        width: 15px;
        background-color: v-bind(circleColor);
        border-radius: 100%;
        margin-left: v-bind(margin);
    }
</style>
