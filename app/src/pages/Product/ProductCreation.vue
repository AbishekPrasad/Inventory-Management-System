<script setup>
import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Topbar from '../../components/Topbar.vue';
import Button from '../../components/Button.vue';

import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

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

function uploadImage(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    product.image = file;
    imagePreview.value = URL.createObjectURL(file);
}

async function onLaunch() {
    let imagePath = "";

    if (product.image) {
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

    const newProduct = {
        name: product.name,
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
        'http://localhost:8000/products',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }
    console.log("LAUNCH CLICKED")
    router.push('/products');
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

                    <div class="button">
                        <router-link to="/products" style="text-decoration: none;">
                            <Button buttonName="Close" color="#8E2D35" />
                        </router-link>
                        <Button
                            @click="onLaunch"
                            buttonName="Launch Product"
                            color="#8E2D35"
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