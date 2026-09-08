<script setup>
    import Plainbar from '../components/Plainbar.vue';
    import Navbar from '../components/Navbar.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Topbar from '../components/Topbar.vue';
    import Button from '../components/Button.vue';
    import Searchbar from '../components/Searchbar.vue';
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar class="navbar" pageName="Products" pageTitle="Your Products" buttonName="Create Product"/>
            <Sidebar class="sidebar" />
            <div class="features"> 
                <div class="action-features">
                    <Button color="#BEBEBE" buttonName="A - Z" style="width: 100px;"/>
                    <Button color="#BEBEBE" buttonName="Z - A" style="width: 100px;"/>
                </div>
                <Searchbar class="searchbar"/>
                <router-link to="/product-creation" style="text-decoration: none;">
                    <Button class="button" buttonName="Create Product" color="#8E2D35"/>
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
