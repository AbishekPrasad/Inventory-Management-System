<script setup>
    import Navbar from '../../components/Navbar.vue';
    import Sidebar from '../../components/Sidebar.vue';
    import Topbar from '../../components/Topbar.vue';
    import Button from '../../components/Button.vue';

    import { reactive, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const imagePreview = ref('');

    const employee = reactive({
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

    async function onLaunch() {
        let imagePath = "";

        if (employee.image) {
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

        const newEmployee = {
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
            'http://localhost:8000/employees',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmployee)
            }
        );

        if (!response.ok) {
            console.error(await response.text());
            return;
        }
        console.log("LAUNCH CLICKED")
        router.push('/employees');
    }
</script>

<template>
    <div>
        <Topbar />
        <div class="container">
            <Navbar class="navbar" pageName="Employee Creation" pageTitle="Employment Creation Page"/>
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
                    <h1>Provide Employee Details</h1> 
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
                        <div class="button">
                            <router-link to="/iam" style="text-decoration: none;"><Button buttonName="Close" color="#8E2D35"/></router-link>
                            <Button 
                            buttonName="Launch Employee" 
                            color="#8E2D35"
                            @click="onLaunch"/>
                        </div>
                </div>   
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "../formstyle.css";
</style>
