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
            <Navbar pageName="Suppliers" pageTitle="Your Suppliers" buttonName="Create Supplier"/>
        </div>
    </div>
</template>

<style scoped>
    .navbar {
        display: flex;
    }
</style>
