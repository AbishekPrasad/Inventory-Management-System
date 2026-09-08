<script setup>

</script>

<template>
    <div class="background">
        <h6>Upload Photo</h6>
        <img src="" alt="">
        <h6>Description</h6>
        <textarea class="description" placeholder="Enter Description"></textarea>
    </div>
</template>

<style scoped>
    .description {
        font-size: 8pt;
        padding: 10px;
        color: #BEBEBE;
        font-family: 'roboto';
    }
    .background {
        display: flex;
        flex-direction: column;
        height: 450px;
        width: 250px;
        border: 1px solid #BEBEBE;
        background-color: #F9F9F9;
        border-radius: 10px;
        align-items: center;
    }
    h6 {
        font-family: 'roboto';
        font-weight: 500;
        padding: 10px;
    }
    img {
        background-color: white;
        width: 210px;
        height: 210px;
        border-radius: 6px;
        border: 1px solid #EAEAEA;
    }
    .description {
        background-color: white;
        width: 210px;
        height: 155px;
        border-radius: 6px;
        border: 1px solid #EAEAEA;
        padding: 10px;
    }
</style>
