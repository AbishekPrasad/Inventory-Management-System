<script setup>
    import Plainbar from '../../components/Plainbar.vue';
    import Navbar from '../../components/Navbar.vue';
    import Sidebar from '../../components/Sidebar.vue';
    import Topbar from '../../components/Topbar.vue';
    import Button from '../../components/Button.vue';
    import Searchbar from '../../components/Searchbar.vue';
    import suppliers from '../../database/db.json'

    import { ref } from 'vue';

    const num_of_items = ref(0)
    const items = ref(suppliers.suppliers)
    const allItems = suppliers.suppliers

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
            item.phone.toLowerCase().includes(value) ||
            item.email.toLowerCase().includes(value) ||
            item.address.toLowerCase().includes(value)
        )
    }
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar class="navbar" 
                pageName="Suppliers" 
                pageTitle="Your Suppliers" 
                buttonName="Create Suppliers" 
                :totalItems="num_of_items"
            />
            <Sidebar class="sidebar" />
            <div class="features"> 
                <div class="action-features">
                    <Button @click="sortAZ" color="#BEBEBE" buttonName="A - Z" style="width: 100px;"/>
                    <Button @click="sortZA" color="#BEBEBE" buttonName="Z - A" style="width: 100px;"/>
                </div>
                <Searchbar class="searchbar" @search="searchProducts"/>
                <router-link to="/supplier-creation" style="text-decoration: none;">
                    <Button class="button" buttonName="Create Supplier" color="#8E2D35"/>
                </router-link>
            </div>
            <div class="main">
                <Plainbar 
                    v-for="item in items"
                    :key="item.id"
                    :routeTo="`/supplier-details/${item.id}`"
                >
                    <h5>{{ item.name }}</h5>
                    <h5>{{ item.email }}</h5>
                    <h5>{{ item.phone }}</h5>
                    <h5>{{ Tquantity }}</h5>
                    <h5>{{ amount }}</h5>
                    <img :src="item.image ? `http://localhost:8000${item.image}` : '/icons/Img.png'">
                </Plainbar>         
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "../styles.css";
</style>
