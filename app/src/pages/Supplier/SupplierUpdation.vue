<script setup>
import Navbar from '../../components/Navbar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Topbar from '../../components/Topbar.vue';
import Button from '../../components/Button.vue';

import { reactive, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const imagePreview = ref('');

const supplier = reactive({
    id: "",
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

onMounted(async () => {
    const response = await fetch(
        `http://localhost:8000/suppliers/${route.params.id}`
    );

    if (!response.ok) {
        console.error("Supplier not found");
        return;
    }

    const data = await response.json();

    Object.assign(supplier, data);

    if (data.image) {
        imagePreview.value = `http://localhost:8000${data.image}`;
    }
});

async function onEdit() {
    let imagePath = supplier.image;

    if (supplier.image instanceof File) {
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

    const updatedSupplier = {
        id: supplier.id,
        name: supplier.name,
        email: supplier.email,
        phone: supplier.phone,
        address: supplier.address,
        image: imagePath,
        description: supplier.description
    };

    const response = await fetch(
        `http://localhost:8000/suppliers/${route.params.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedSupplier)
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }

    router.back();
}

async function onDelete() {
    if (!confirm("Are you sure you want to delete this supplier?")) {
        return;
    }

    const response = await fetch(
        `http://localhost:8000/suppliers/${route.params.id}`,
        {
            method: 'DELETE'
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }

    router.push('/suppliers');
}
</script>

<template>
    <div>
        <Topbar />

        <div class="container">
            <Navbar
                class="navbar"
                pageName="Supplier Details"
                pageTitle="Supplier Details and Modification"
            />

            <Sidebar class="sidebar" />

            <div class="main">
                <div class="background">
                    <h6>Photo</h6>

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
                        v-model="supplier.description"
                    ></textarea>
                </div>

                <div class="form">
                    <h1>Your Supplier Details</h1>

                    <div style="grid-row: 2; grid-column: 1;">
                        <p>Supplier name</p>

                        <input
                            v-model="supplier.name"
                            type="text"
                            placeholder="Enter Supplier name"
                        >
                    </div>

                    <div style="grid-row: 2; grid-column: 2;">
                        <p>Email Id</p>

                        <input
                            v-model="supplier.email"
                            type="email"
                            placeholder="Enter example@abc.com"
                        >
                    </div>

                    <div style="grid-row: 3; grid-column: 1;">
                        <p>Phone Number</p>

                        <input
                            v-model="supplier.phone"
                            type="tel"
                            placeholder="Enter 1234567890"
                        >
                    </div>

                    <div style="grid-row: 3; grid-column: 2;">
                        <p>Supplier Address</p>

                        <input
                            v-model="supplier.address"
                            type="text"
                            placeholder="Enter address"
                        >
                    </div>

                    <Button
                        @click="onDelete"
                        style="grid-row: 6; grid-column: 1; margin-right: 100%;"
                        buttonName="Delete"
                        color="#8E2D35"
                    />

                    <div class="button">
                        <router-link
                            to="/suppliers"
                            style="text-decoration: none;"
                        >
                            <Button
                                buttonName="Close"
                                color="#8E2D35"
                            />
                        </router-link>

                        <Button
                            @click="onEdit"
                            buttonName="Edit Supplier"
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

input {
    background-color: #F9F9F9;
}
</style>