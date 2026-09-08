<script setup>
    import Navbar from '../components/Navbar.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Topbar from '../components/Topbar.vue';
    import Button from '../components/Button.vue';
    import Table from '../components/Table.vue';
    import Searchbar from '../components/Searchbar.vue';
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar pageName="Transaction Logs" pageTitle="Your Transaction Logs" buttonName="Export Data"/>
            <Sidebar class="sidebar" />
            <div class="features"> 
                <div class="action-features">
                    <Button color="#BEBEBE" buttonName="A - Z" style="width: 100px;"/>
                    <Button color="#BEBEBE" buttonName="Z - A" style="width: 100px;"/>
                </div>
                <Searchbar class="searchbar"/>
            </div>
            <div class="main">
                <Table />
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "./styles.css";
</style>
