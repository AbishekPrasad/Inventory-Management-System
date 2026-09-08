<script setup>
import Button from './Button.vue';
</script>

<template>
    <div class="topbar">
        <h1 class="logo">The Inventory</h1>
        <div class="features">    
            <Button buttonName="Admin" color="black" :style="{ height: '30px', width: '100px'}"/>
            <img class="icon" src="../../icons/favicon.png">
        </div>
    </div>
</template>

<style scoped>
    .features {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px
    }
    .icon {
        width: 30px;
        height: 30px;
    }
    .logo {
        color: white;
        font-family: "Kaushan Script", cursive;
        font-weight: 400;
        font-style: normal;
        font-size: 20pt;
        margin-right: auto;
    }
    .topbar {
        display: flex;
        background: #8E2D35;
        width: 100%;
        height: 50px;
        align-items: center;
        padding: 0px 60px;
    }
</style>
