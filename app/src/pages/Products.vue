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
    const items = ref(products.products)
    const allItems = products.products

    num_of_items.value = items.value.length
    num_of_items.value = "(" + String(num_of_items.value) + ")"

    const amount = ref(0)
    const Tquantity = ref(0)

    function sortAZ() {
        items.value = [...items.value].sort((a, b) =>
            a.name.localeCompare(b.name)
        )
    }

    function sortZA() {
        items.value = [...items.value].sort((a, b) =>
            b.name.localeCompare(a.name)
        )
    }

    function searchProducts(search) {
        const value = search.toLowerCase()

        items.value = allItems.filter(item =>
            item.name.toLowerCase().includes(value) ||
            item.category.toLowerCase().includes(value) ||
            item.supplier.toLowerCase().includes(value) ||
            item.sku.toLowerCase().includes(value)
        )
    }
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
                    <Button @click="sortAZ" color="#BEBEBE" buttonName="A - Z" style="width: 100px;"/>
                    <Button @click="sortZA" color="#BEBEBE" buttonName="Z - A" style="width: 100px;"/>
                </div>
                <Searchbar class="searchbar" @search="searchProducts"/>
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
                    :quantity="Tquantity + item.ISQ"
                    :amount="amount + item.price"
                    :imagePath="item.image ? `http://localhost:8000${item.image}` : `./icons/Img.png`"
                    :routeTo="`/product-details/${item.id}`"
                />         
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "./styles.css";
</style>
