<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Topbar from '../../components/Topbar.vue';
import Button from '../../components/Button.vue';

import { uploadImage, onLaunch } from '../../composables/Products.js'

const router = useRouter();
const imagePreview = ref('');

const product = reactive({
    name: "",
    ISQ: 0,
    price: 0.0,
    reorderLevel: 0,
    category: "",
    supplier: "",
    weight: 0,
    image: "",
    description: ""
});

</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar
                class="navbar"
                pageName="Product Creation Page"
                pageTitle="Product Creation"
            />
            <Sidebar class="sidebar" />
            <div class="main">
                <div class="background">
                    <h6>Upload Photo</h6>
                    <label class="image-upload">
                        <input type="file" accept="image/*" @change="uploadImage">
                        <img v-if="imagePreview" :src="imagePreview" class="preview">
                        <img v-else src="/icons/Img.png" class="upload-icon">
                    </label>
                    <h6>Description</h6>
                    <textarea
                        class="description"
                        placeholder="Description"
                        v-model="product.description"
                    ></textarea>
                </div>
                <div class="form">
                    <h1>Provide Product Details</h1>

                    <div style="grid-row: 2; grid-column: 1;">
                        <p>Product name<span style="color: red;"> *</span></p>
                        <input v-model="product.name" type="text" placeholder="Enter Product name">
                    </div>

                    <div style="grid-row: 2; grid-column: 2;">
                        <p>Initial Stock Quality (ISQ)<span style="color: red;"> *</span></p>
                        <input v-model.number="product.ISQ" type="number" placeholder="Enter 50">
                    </div>

                    <div style="grid-row: 3; grid-column: 1;">
                        <p>Unit Price<span style="color: red;"> *</span></p>
                        <input v-model.number="product.price" type="number" placeholder="Enter 25.65">
                    </div>

                    <div style="grid-row: 3; grid-column: 2;">
                        <p>Reorder Level (RL)<span style="color: red;"> *</span></p>
                        <input v-model.number="product.reorderLevel" type="number" placeholder="Enter 10">
                    </div>

                    <div style="grid-row: 4; grid-column: 1;">
                        <p>Category<span style="color: red;"> *</span></p>
                        <input v-model="product.category" type="text" placeholder="Enter Category">
                    </div>

                    <div style="grid-row: 4; grid-column: 2;">
                        <p>Supplier<span style="color: red;"> *</span></p>
                        <input v-model="product.supplier" type="text" placeholder="Enter Supplier">
                    </div>

                    <div style="grid-row: 5; grid-column: 1;">
                        <p>Stock Keeping Unit (SKU)</p>
                        <input value="Auto-Generated" type="text" placeholder="PRD-101" readonly>
                    </div>

                    <div style="grid-row: 5; grid-column: 2;">
                        <p>Weight</p>
                        <input v-model.number="product.weight" type="number" placeholder="Enter in kgs">
                    </div>

                    <div class="button">
                        <router-link to="/products" style="text-decoration: none;">
                            <Button buttonName="Close" color="#8E2D35" />
                        </router-link>
                        <Button
                            @click="onLaunch"
                            buttonName="Launch Product"
                            color="white"
                            backgroundColor="#8E2D35"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../formstyle.css";
</style>