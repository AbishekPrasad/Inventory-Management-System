<script setup>

    import Navbar from '../components/Navbar.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Topbar from '../components/Topbar.vue';
</script>

<template>
    <div>
        <Topbar />
        <div class="navbar">
            <Sidebar />
            <Navbar pageName="Products" pageTitle="Your Products" buttonName="Create Product"/>
        </div>
    </div>
</template>

<style scoped>
    .navbar {
        display: flex;
    }
</style>
