<script setup>

</script>

<template>
    <div class="sidebar">
        <ul class="features">
            <img class="icon" src="../../icons/Dashboard Icon.png">
            <router-link to="/suppliers">
                <img class="icon" src="../../icons/Suppliers.png">
            </router-link>
            <router-link to="/products">
                <img class="icon" src="../../icons/Products.png">
            </router-link>
            <router-link to="/Transactions">
                <img class="icon" src="../../icons/Transaction.png">
            </router-link>
            <router-link to="/iam">
                <img class="icon" src="../../icons/Employee.png">
            </router-link>
        </ul>
    </div>
</template>

<style scoped>
    .features {
        position: absolute;
        top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 30px;
    }
    .icon {
        width: 25px;
        height: 25px;
    }
    .sidebar {
        display: flex;
        position: relative;
        background: #8E2D35;
        width: 50px;
        height: 100vh;
        justify-content: center;
    }
</style>
