<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Topbar from '../../components/Topbar.vue';
import Button from '../../components/Button.vue';
import InputForm from '../../components/InputForm.vue';

import { onLaunch } from '../../composables/Products.js';

const router = useRouter();
const imagePreview = ref('');

const product = reactive({
    name: '',
    ISQ: 0,
    price: 0,
    reorderLevel: 0,
    category: '',
    supplier: '',
    weight: 0,
    image: '',
    description: ''
});

const errors = reactive({
    name: '',
    ISQ: '',
    price: '',
    reorderLevel: '',
    category: '',
    supplier: '',
    weight: '',
    description: ''
});

function uploadImage(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    product.image = file;
    imagePreview.value = URL.createObjectURL(file);
}


function validateForm() {
    Object.keys(errors).forEach(key => errors[key] = '');

    if (!product.name.trim())
        errors.name = 'Product name is required';

    if (product.ISQ < 0)
        errors.ISQ = 'Stock quantity cannot be negative';

    if (product.price <= 0)
        errors.price = 'Price must be greater than 0';

    if (product.reorderLevel < 0)
        errors.reorderLevel = 'Reorder level cannot be negative';

    if (!product.category.trim())
        errors.category = 'Category is required';

    if (!product.supplier.trim())
        errors.supplier = 'Supplier is required';

    if (product.weight <= 0)
        errors.weight = 'Weight must be greater than 0';

    return !Object.values(errors).some(error => error);
}

async function launchProduct() {
    if (!validateForm()) return;
    await onLaunch(product, router);
}
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
                        <input
                            type="file"
                            accept="image/*"
                            @change="uploadImage"
                        >
                        <img
                            v-if="imagePreview"
                            :src="imagePreview"
                            class="preview"
                        >
                        <img
                            v-else
                            src="/icons/Img.png"
                            class="upload-icon"
                        >
                    </label>
                    <h6>Description</h6>
                    <textarea
                        class="description"
                        placeholder="Description"
                        v-model="product.description"
                    ></textarea>
                    <p v-if="errors.description">{{ errors.description }}</p>
                </div>
                <div class="form">
                    <h1>Provide Product Details</h1>
                    <InputForm
                        style="grid-row: 2; grid-column: 1;"
                        name="Product Name"
                        type="text"
                        v-model="product.name"
                        placeholder="Enter Product name"
                        :error="errors.name"
                    />
                    <InputForm
                        style="grid-row: 2; grid-column: 2;"
                        name="Initial Stock Quantity (ISQ)"
                        type="number"
                        v-model="product.ISQ"
                        placeholder="Enter 50"
                        :error="errors.ISQ"
                    />
                    <InputForm
                        style="grid-row: 3; grid-column: 1;"
                        name="Unit Price"
                        type="number"
                        v-model="product.price"
                        placeholder="Enter 25.65"
                        :error="errors.price"
                    />
                    <InputForm
                        style="grid-row: 3; grid-column: 2;"
                        name="Reorder Level (RL)"
                        type="number"
                        v-model="product.reorderLevel"
                        placeholder="Enter 10"
                        :error="errors.reorderLevel"
                    />
                    <InputForm
                        style="grid-row: 4; grid-column: 1;"
                        name="Category"
                        type="text"
                        v-model="product.category"
                        placeholder="Enter Category"
                        :error="errors.category"
                    />
                    <InputForm
                        style="grid-row: 4; grid-column: 2;"
                        name="Supplier"
                        type="text"
                        v-model="product.supplier"
                        placeholder="Enter Supplier"
                        :error="errors.supplier"
                    />
                    <InputForm
                        style="grid-row: 5; grid-column: 1;"
                        name="SKU Code"
                        type="text"
                        placeholder="Auto-generated"
                        readonly
                    />
                    <InputForm
                        style="grid-row: 5; grid-column: 2;"
                        name="Weight"
                        type="number"
                        v-model="product.weight"
                        placeholder="Enter in Kg"
                        :error="errors.weight"
                    />
                    <div class="button">
                        <router-link to="/products" style="text-decoration: none;">
                            <Button buttonName="Close" color="#8E2D35" />
                        </router-link>
                        <Button
                            @click="launchProduct"
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
