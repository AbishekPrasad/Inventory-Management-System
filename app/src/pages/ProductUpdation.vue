<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import Button from '../components/Button.vue';

import { reactive, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const imagePreview = ref('');

const product = reactive({
    id: "",
    name: "",
    ISQ: 0,
    price: 0,
    reorderLevel: 0,
    category: "",
    supplier: "",
    sku: "",
    weight: 0,
    image: "",
    description: ""
});

function uploadImage(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    product.image = file;
    imagePreview.value = URL.createObjectURL(file);
}

onMounted(async () => {
    const response = await fetch(
        `http://localhost:8000/products/${route.params.id}`
    );

    if (!response.ok) {
        console.error("Product not found");
        return;
    }

    const data = await response.json();

    Object.assign(product, data);

    if (data.image) {
        imagePreview.value = `http://localhost:8000${data.image}`;
    }
});

async function onEdit() {
    let imagePath = product.image;

    if (product.image instanceof File) {
        const formData = new FormData();
        formData.append("image", product.image);

        const imageResponse = await fetch(
            'http://localhost:8000/upload-image',
            {
                method: 'POST',
                body: formData
            }
        );

        if (!imageResponse.ok) {
            console.error(await imageResponse.text());
            return;
        }

        const imageData = await imageResponse.json();
        imagePath = imageData.image;
    }

    const updatedProduct = {
        id: product.id,
        name: product.name,
        sku: product.sku,
        category: product.category,
        supplier: product.supplier,
        price: product.price,
        ISQ: product.ISQ,
        reorderLevel: product.reorderLevel,
        weight: product.weight,
        image: imagePath,
        description: product.description
    };

    const response = await fetch(
        `http://localhost:8000/products/${route.params.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }

    router.back();
}

async function onDelete() {
    if (!confirm("Are you sure you want to delete this product?")) {
        return;
    }

    const response = await fetch(
        `http://localhost:8000/products/${route.params.id}`,
        {
            method: 'DELETE'
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }

    router.push('/products');
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
                    <h1>Your Product Details</h1>

                    <div style="grid-row: 2; grid-column: 1;">
                        <p>Product name</p>
                        <input v-model="product.name" type="text" placeholder="Enter Product name">
                    </div>

                    <div style="grid-row: 2; grid-column: 2;">
                        <p>Initial Stock Quality (ISQ)</p>
                        <input v-model.number="product.ISQ" type="number" placeholder="Enter 50">
                    </div>

                    <div style="grid-row: 3; grid-column: 1;">
                        <p>Unit Price</p>
                        <input v-model.number="product.price" type="number" placeholder="Enter 25.65">
                    </div>

                    <div style="grid-row: 3; grid-column: 2;">
                        <p>Reorder Level (RL)</p>
                        <input v-model.number="product.reorderLevel" type="number" placeholder="Enter 10">
                    </div>

                    <div style="grid-row: 4; grid-column: 1;">
                        <p>Category</p>
                        <input v-model="product.category" type="text" placeholder="Enter Category">
                    </div>

                    <div style="grid-row: 4; grid-column: 2;">
                        <p>Supplier</p>
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

                    <Button
                        @click="onDelete"
                        style="grid-row: 6; grid-column: 1; margin-right: 100%;"
                        buttonName="Delete"
                        color="#8E2D35"
                    />

                    <div class="button">
                        <router-link to="/products" style="text-decoration: none;">
                            <Button buttonName="Close" color="#8E2D35" />
                        </router-link>

                        <Button
                            @click="onEdit"
                            buttonName="Edit Product"
                            color="#8E2D35"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "./formstyle.css";
</style>