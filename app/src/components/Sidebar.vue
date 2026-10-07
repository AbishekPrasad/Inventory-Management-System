<script setup>

</script>

<template>
    <div class="sidebar">
        <ul class="features">
            <router-link to="/products">
                <img class="icon" src="../../icons/Products.png">
            </router-link>
        </ul>
    </div>
</template>

<style scoped>
    .features {
        position: absolute;
        top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 30px;
    }
    .icon {
        width: 25px;
        height: 25px;
    }
    .sidebar {
        display: flex;
        background: #8E2D35;
        width: 50px;
        height: 100vh;
        justify-content: center;
    }
</style>
