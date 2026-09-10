<script setup>
import { ref } from 'vue';

const search = ref('')

const emit = defineEmits(['search'])
</script>

<template>
    <div class="searchbar">
        <img class="icon" src="../../icons/Search icon.png">
        <input
            v-model="search"
            @input="emit('search', search)"
            type="text"
            placeholder="Search"
        >
    </div>
</template>

<style scoped>
.icon {
    height: 20px;
    width: 20px;
}

.searchbar {
    display: flex;
    height: 30px;
    width: 350px;
    background-color: white;
    border: 1px solid #BEBEBE;
    border-radius: 50px;
    align-items: center;
    padding: 0px 10px;
}

input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0px 10px;
    font-family: 'roboto';
    font-size: 10pt;
    color: #333;
    background: transparent;
}

input::placeholder {
    color: #BEBEBE;
}
</style>