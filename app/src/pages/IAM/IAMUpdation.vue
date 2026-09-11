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

const employee = reactive({
    id: "",
    firstname: "",
    lastname: "",
    role: "",
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

    employee.image = file;
    imagePreview.value = URL.createObjectURL(file);
}

onMounted(async () => {
    const response = await fetch(
        `http://localhost:8000/employees/${route.params.id}`
    );

    if (!response.ok) {
        console.error("employee not found");
        return;
    }

    const data = await response.json();

    Object.assign(employee, data);

    if (data.image) {
        imagePreview.value = `http://localhost:8000${data.image}`;
    }
});

async function onEdit() {
    let imagePath = employee.image;

    if (employee.image instanceof File) {
        const formData = new FormData();
        formData.append("image", employee.image);

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

    const updatedemployee = {
        id: employee.id,
        firstname: employee.firstname,
        lastname: employee.lastname,
        role: employee.role,
        email: employee.email,
        phone: employee.phone,
        address: employee.address,
        image: imagePath,
        description: employee.description
    };

    const response = await fetch(
        `http://localhost:8000/employees/${route.params.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedemployee)
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }

    router.back();
}

async function onDelete() {
    if (!confirm("Are you sure you want to delete this employee?")) {
        return;
    }

    const response = await fetch(
        `http://localhost:8000/employees/${route.params.id}`,
        {
            method: 'DELETE'
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }

    router.push('/employees');
}
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar
                class="navbar"
                pageName="Employee Details"
                pageTitle="Employee Details and Modification"
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
                        v-model="employee.description"
                    ></textarea>
                </div>
                <div class="form">
                    <h1>Your Employee Details</h1>
                    <div style="grid-row: 2; grid-column: 1;">
                            <p>First name</p>
                            <input v-model="employee.firstname" type="text" placeholder="Enter First name">
                        </div>
                        <div style="grid-row: 2; grid-column: 2;">
                            <p>Last name</p>
                            <input v-model="employee.lastname" type="text" placeholder="Enter Last name">
                        </div>
                        <div style="grid-row: 3; grid-column: 1;">
                            <p>Role</p>
                            <input v-model="employee.role" type="text" placeholder="Enter Role">
                        </div>
                        <div style="grid-row: 3; grid-column: 2;">
                            <p>Email Id</p>
                            <input v-model="employee.email" type="email" placeholder="example@abc.com">
                        </div>
                        <div style="grid-row: 4; grid-column: 1;">
                            <p>Phone number</p>
                            <input v-model="employee.phone" type="tel" placeholder="Enter Product name">
                        </div>
                        <div style="grid-row: 4; grid-column: 2;">
                            <p>Address</p>
                            <input v-model="employee.address" type="text" placeholder="Enter Product name">
                        </div>
                    <Button
                        @click="onDelete"
                        style="grid-row: 6; grid-column: 1; margin-right: 100%;"
                        buttonName="Delete"
                        color="#8E2D35"
                    />

                    <div class="button">
                        <router-link to="/employees" style="text-decoration: none;">
                            <Button buttonName="Close" color="#8E2D35" />
                        </router-link>

                        <Button
                            @click="onEdit"
                            buttonName="Edit Employee"
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