<script setup>

const navbar = defineProps({
    pageName: String,
    pageTitle: String,
})

</script>

<template>
    <div class="navbar">
        <p class="place"><span style="color: #8E2D35; font-weight: 1000;">// </span>{{ navbar.pageName }}</p>
        <div class="main">
            <h1 class="heading">{{ navbar.pageTitle }} (<span style="color: #8E2D35;">3</span>)</h1>
        </div>
    </div>
</template>

<style scoped>
    .main {
        position: absolute;
        display: flex;
        align-items: center;
        width: 90%;
        top: 40px;
        left: 50px;
    }
    .heading {
        font-family: "Carlito";
        font-weight: 600;
        font-size: 20pt;
        justify-self: start;
    }
    .place {
        position: absolute;
        top: 10px;
        left: 50px;
        font-family: "Carlito";
    }
    .navbar {
        display: flex;
        position: relative;
        height: 85px;
        width: 100%;
        background: white;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    }
</style>
