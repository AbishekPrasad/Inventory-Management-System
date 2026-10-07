<script setup>
import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Topbar from '../../components/Topbar.vue';
import Button from '../../components/Button.vue';
import InputForm from '../../components/InputForm.vue';

import { reactive, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { onDelete, onEdit } from '../../composables/Products.js';

const route = useRoute();
const router = useRouter();
const imagePreview = ref('');

const product = reactive({
    id: '',
    name: '',
    ISQ: 0,
    price: 0,
    reorderLevel: 0,
    category: '',
    supplier: '',
    sku: '',
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

onMounted(async () => {
    try {
        const response = await fetch(
            `http://localhost:8000/products/${route.params.id}`
        );

        if (!response.ok) {
            console.error('Product not found');
            return;
        }

        const data = await response.json();

        Object.assign(product, data);

        if (data.image) {
            imagePreview.value = `http://localhost:8000${data.image}`;
        }
    } catch (error) {
        console.error('Failed to load product:', error);
    }
});

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

    if (product.weight < 0)
        errors.weight = 'Weight cannot be negative';

    return !Object.values(errors).some(error => error);
}

async function editProduct() {
    if (!validateForm()) return;
    await onEdit(product, route, router);
}
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar
                class="navbar"
                pageName="Product Details"
                pageTitle="Product Details and Modification"
            />
            <Sidebar class="sidebar" />

            <div class="main">
                <div class="background">
                    <h6>Photo</h6>

                    <label class="image-upload">
                        <input
                            type="file"
                            accept="image/*"
                            @change="uploadImage($event, product, imagePreview)"
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
                </div>

                <div class="form">
                    <h1>Your Product Details</h1>

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
                        name="Stock Keeping Unit (SKU)"
                        type="text"
                        v-model="product.sku"
                        placeholder="PRD-101"
                        readonly
                    />

                    <InputForm
                        style="grid-row: 5; grid-column: 2;"
                        name="Weight"
                        type="number"
                        v-model="product.weight"
                        placeholder="Enter in kgs"
                        :error="errors.weight"
                    />

                    <Button
                        @click="onDelete(product.id, router)"
                        style="grid-row: 6; grid-column: 1; margin-right: 100%;"
                        buttonName="Delete"
                        color="white"
                        backgroundColor="#8E2D35"
                    />

                    <div class="button">
                        <router-link
                            to="/products"
                            style="text-decoration: none;"
                        >
                            <Button
                                buttonName="Close"
                                color="#8E2D35"
                            />
                        </router-link>

                        <Button
                            @click="editProduct"
                            buttonName="Edit Product"
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

input {
    background-color: #F9F9F9;
}
</style>
