<script setup>
    import Plainbar from '../../components/Plainbar.vue';
    import Navbar from '../../components/Navbar.vue';
    import Sidebar from '../../components/Sidebar.vue';
    import Topbar from '../../components/Topbar.vue';
    import Button from '../../components/Button.vue';
    import Searchbar from '../../components/Searchbar.vue';
    import employees from '../../database/db.json'

    import { ref } from 'vue';

    const num_of_items = ref(0)
    const items = ref(employees.employees)
    const allItems = employees.employees

    num_of_items.value = items.value.length
    num_of_items.value = "(" + String(num_of_items.value) + ")"

    function sortAZ() {
        items.value = [...items.value].sort((a, b) =>
            a.firstname.localeCompare(b.firstname)
        )
    }

    function sortZA() {
        items.value = [...items.value].sort((a, b) =>
            b.firstname.localeCompare(a.firstname)
        )
    }

    function searchEmployee(search) {
        const value = search.toLowerCase()

        items.value = allItems.filter(item =>
            item.firstname.toLowerCase().includes(value) ||
            item.lastname.toLowerCase().includes(value) ||
            item.role.toLowerCase().includes(value) ||
            item.email.toLowerCase().includes(value)
        )
    }
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar class="navbar" 
                pageName="Employee" 
                pageTitle="Your Employees" 
                buttonName="Create Employee" 
                :totalItems="num_of_items"
            />
            <Sidebar class="sidebar" />
            <div class="features"> 
                <div class="action-features">
                    <Button @click="sortAZ" color="#BEBEBE" buttonName="A - Z" style="width: 100px;"/>
                    <Button @click="sortZA" color="#BEBEBE" buttonName="Z - A" style="width: 100px;"/>
                </div>
                <Searchbar class="searchbar" @search="searchEmployee"/>
                <router-link to="/employee-creation" style="text-decoration: none;">
                    <Button class="button" buttonName="Create Employee" color="#8E2D35"/>
                </router-link>
            </div>
            <div class="main">
                <Plainbar 
                    v-for="item in items"
                    :key="item.id"
                    :routeTo="`/employee-details/${item.id}`"
                >
                    <h5>{{ item.firstname }}</h5>
                    <h5>{{ item.lastname }}</h5>
                    <h5>{{ item.role }}</h5>
                    <h5>{{ item.email }}</h5>
                    <img :src="item.image ? `http://localhost:8000${item.image}` : '/icons/Img.png'">
                </Plainbar>         
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "../styles.css";
</style>
