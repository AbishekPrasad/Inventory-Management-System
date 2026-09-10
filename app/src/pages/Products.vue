<script setup>
    import Plainbar from '../components/Plainbar.vue';
    import Navbar from '../components/Navbar.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Topbar from '../components/Topbar.vue';
    import Button from '../components/Button.vue';
    import Searchbar from '../components/Searchbar.vue';
    import products from '../database/db.json'

    import { ref } from 'vue';

    const num_of_items = ref(0)
    const items = products.products

    num_of_items.value = items.length
    num_of_items.value = "(" + String(num_of_items.value) + ")"
    

</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar class="navbar" 
                pageName="Products" 
                pageTitle="Your Products" 
                buttonName="Create Product" 
                :totalItems="num_of_items"
            />
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
                <Plainbar 
                    v-for="item in items"
                    :name="item.name"
                    :category="item.category"
                    :supplier="item.supplier"
                    :quantity="item.quantity"
                    :amount="item.amount"
                    :routeTo="`/product-details/${item.id}`"
                />         
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "./styles.css";
</style>
