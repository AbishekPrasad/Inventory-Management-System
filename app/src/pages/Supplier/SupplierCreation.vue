<script setup>
import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Topbar from '../../components/Topbar.vue';
import Button from '../../components/Button.vue';

import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const imagePreview = ref('');

const supplier = reactive({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
    description: ""
});

function uploadImage(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    supplier.image = file;
    imagePreview.value = URL.createObjectURL(file);
}

async function onLaunch() {
    let imagePath = "";

    if (supplier.image) {
        const formData = new FormData();
        formData.append("image", supplier.image);

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

    const newSupplier = {
        name: supplier.name,
        email: supplier.email,
        phone: supplier.phone,
        address: supplier.address,
        image: imagePath,
        description: supplier.description
    };

    const response = await fetch(
        'http://localhost:8000/suppliers',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSupplier)
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }
    console.log("LAUNCH CLICKED")
    router.push('/suppliers');
}
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar
                class="navbar"
                pageName="Supplier Creation Page"
                pageTitle="Supplier Creation"
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
                        v-model="supplier.description"
                    ></textarea>
                </div>
                <div class="form">
                    <h1>Provide Supplier Details</h1>

                    <div style="grid-row: 2; grid-column: 1;">
                        <p>Supplier name</p>
                        <input v-model="supplier.name" type="text" placeholder="Enter Supplier name">
                    </div>

                    <div style="grid-row: 2; grid-column: 2;">
                        <p>Email Id</p>
                        <input v-model="supplier.email" type="email" placeholder="Enter example@abc.com">
                    </div>

                    <div style="grid-row: 3; grid-column: 1;">
                        <p>Phone Number</p>
                        <input v-model="supplier.phone" type="tel" placeholder="Enter 1234567890">
                    </div>

                    <div style="grid-row: 3; grid-column: 2;">
                        <p>Supplier Address</p>
                        <input v-model="supplier.address" type="text" placeholder="Enter address">
                    </div>
                    <div class="button">
                        <router-link to="/suppliers" style="text-decoration: none;">
                            <Button buttonName="Close" color="#8E2D35" />
                        </router-link>
                        <Button
                            @click="onLaunch"
                            buttonName="Launch Supplier"
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