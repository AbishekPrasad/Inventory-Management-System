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
            <Navbar pageName="Transaction Logs" pageTitle="Your Transaction Logs" buttonName="Export Data"/>
        </div>
    </div>
</template>

<style scoped>
    .navbar {
        display: flex;
    }
</style>
