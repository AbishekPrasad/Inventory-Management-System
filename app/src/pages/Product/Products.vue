<script setup>
    import Plainbar from '../../components/Plainbar.vue';
    import Navbar from '../../components/Navbar.vue';
    import Sidebar from '../../components/Sidebar.vue';
    import Topbar from '../../components/Topbar.vue';
    import Button from '../../components/Button.vue';
    import Searchbar from '../../components/Searchbar.vue';
    import BaseTable from '../../components/BaseTable.vue'

    import products from '../../database/db.json'
    import { ref } from 'vue';
 
    const num_of_items = ref(0)
    const items = ref(products.products)
    const allItems = products.products

    console.log(items.value)

    num_of_items.value = items.value.length
    num_of_items.value = "(" + String(num_of_items.value) + ")"

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
                    <Button @onClick="sortAZ" color="#e1e1e1" buttonName="A - Z" style="width: 100px;"/>
                    <Button @onClick="sortZA" color="#e1e1e1" buttonName="Z - A" style="width: 100px;"/>
                </div>
                <Searchbar class="searchbar" @search="searchProducts($event)"/>
                <router-link to="/product-creation" style="text-decoration: none;">
                    <Button class="button" buttonName="Create Product" color="white" backgroundColor="#8E2D35"/>
                </router-link>
            </div>
            <div class="main">
                <BaseTable>
                    <template #heading>
                        <h6>Product</h6>
                        <h6>SKU Number</h6>
                        <h6>Supplier</h6>
                        <h6>Stock Level</h6>
                        <h6>Price</h6>
                    </template>
                    <template #content>
                        <Plainbar 
                            v-for="item in items"
                            :key="item.id"
                            :routeTo="`/product-details/${item.id}`"
                            :image="item.image ? `http://localhost:8000${item.image}` : '/icons/Img.png'"
                            :name="item.name"
                            :category="item.category"
                        >
                            <h5>{{ item.sku }}</h5>
                            <h5>{{ item.supplier }}</h5>
                            <h5>{{ item.ISQ }}</h5>
                            <h5>{{ item.price }}</h5>
                        </Plainbar>
                    </template>
                </BaseTable>       
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "../styles.css";
</style>
