<script setup>
    import Button from '@/components/Button.vue';
    import Navbar from '../components/Navbar.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Searchbar from '@/components/Searchbar.vue';
    import Topbar from '../components/Topbar.vue';
    import Plainbar from '../components/Plainbar.vue';
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar pageName="Employee Management" pageTitle="Employee Management" buttonName="Create Employee"/>
            <Sidebar class="sidebar" />
            <div class="features"> 
                <div class="action-features">
                    <Button color="#BEBEBE" buttonName="A - Z" style="width: 100px;"/>
                    <Button color="#BEBEBE" buttonName="Z - A" style="width: 100px;"/>
                </div>
                <Searchbar class="searchbar"/>
                <router-link to="/employee-creation" style="text-decoration: none;">
                    <Button class="button" buttonName="Create Employee" color="#8E2D35"/>
                </router-link>
            </div>
            <div class="main">
                <Plainbar />
                <Plainbar />
                <Plainbar />         
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "./styles.css";
</style>
