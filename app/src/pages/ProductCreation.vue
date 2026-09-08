<script setup>
    import Plainbar from '../components/Plainbar.vue';
    import Navbar from '../components/Navbar.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Topbar from '../components/Topbar.vue';
    import Button from '../components/Button.vue';
    import PhotoCard from '../components/PhotoCard.vue';
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar class="navbar" pageName="Product Creation Page" pageTitle="Product Creation"/>
            <Sidebar class="sidebar" />
            <div class="main">
                <PhotoCard card="photo"/>
                <div class="form">
                    <h1>Provide Product Details</h1> 
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
                            <router-link to="/products" style="text-decoration: none;"><Button buttonName="Close" color="#8E2D35"/></router-link>
                            <router-link to="/products" style="text-decoration: none;"><Button buttonName="Launch Product" color="#8E2D35"/></router-link>
                        </div>
                </div>   
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "./formstyle.css";
</style>
