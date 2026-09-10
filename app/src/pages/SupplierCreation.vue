<script setup>
    import Plainbar from '../components/Plainbar.vue';
    import Navbar from '../components/Navbar.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Topbar from '../components/Topbar.vue';
    import Button from '../components/Button.vue';
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar class="navbar" pageName="Supplier Creation Page" pageTitle="Supplier Creation"/>
            <Sidebar class="sidebar" />
            <div class="main">
                <div class="background">
                    <h6>Upload Photo</h6>
                    <img src="" alt="">
                    <h6>Description</h6>
                    <textarea class="description" placeholder="Enter Description"></textarea>
                </div>
                <div class="form">
                    <h1>Provide Supplier Details</h1> 
                        <div style="grid-row: 2; grid-column: 1;">
                            <p>Product name</p>
                            <input type="text" placeholder="Enter Product name">
                        </div>
                        <div style="grid-row: 2; grid-column: 2;">
                            <p>Product name</p>
                            <input type="text" placeholder="Enter Product name">
                        </div>
                        <div style="grid-row: 3; grid-column: 1;">
                            <p>Product name</p>
                            <input type="text" placeholder="Enter Product name">
                        </div>
                        <div style="grid-row: 3; grid-column: 2;">
                            <p>Product name</p>
                            <input type="text" placeholder="Enter Product name">
                        </div>
                        <div style="grid-row: 4; grid-column: 1;">
                            <p>Product name</p>
                            <input type="text" placeholder="Enter Product name">
                        </div>
                        <div style="grid-row: 4; grid-column: 2;">
                            <p>Product name</p>
                            <input type="text" placeholder="Enter Product name">
                        </div>
                        <div style="grid-row: 5; grid-column: 1;">
                            <p>Product name</p>
                            <input type="text" placeholder="Enter Product name">
                        </div>
                        <div style="grid-row: 5; grid-column: 2;">
                            <p>Product name</p>
                            <input type="text" placeholder="Enter Product name">
                        </div>
                        <div class="button">
                            <router-link to="/suppliers" style="text-decoration: none;"><Button buttonName="Close" color="#8E2D35"/></router-link>
                            <router-link to="/suppliers" style="text-decoration: none;"><Button buttonName="Launch Supplier" color="#8E2D35"/></router-link>
                        </div>
                </div>   
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "./formstyle.css";
</style>
