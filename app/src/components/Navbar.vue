<script setup>
import Button from './Button.vue';

const navbar = defineProps({
    pageName: String,
    pageTitle: String,
    buttonName: String,
})

</script>

<template>
    <div class="navbar">
        <p class="place"><span style="color: #8E2D35; font-weight: 1000;">// </span>{{ navbar.pageName }}</p>
        <h1 class="heading">{{ navbar.pageTitle }} (<span style="color: #8E2D35;">3</span>)</h1>
        <Button class="button" :buttonName="navbar.buttonName" color="#8E2D35" fontColor="#8E2D35"/>
    </div>
</template>

<style scoped>
    .button {
        position: absolute;
        top: 45px;
        right: 50px;
    }
    .heading {
        position: absolute;
        top: 45px;
        left: 50px;
        font-family: "Carlito";
        font-weight: 600;
        font-size: 20pt;
    }
    .place {
        position: absolute;
        top: 10px;
        left: 50px;
        font-family: "Carlito";
    }
    .navbar {
        position: relative;
        height: 85px;
        width: 100%;
        background: white;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    }
</style>
