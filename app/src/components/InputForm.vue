<template>
    <div>
        <p>{{ props.name }}<span style="color: red;"> *</span></p>
        <input v-model="model" :type="props.type" :placeholder="props.placeholder" :readonly="props.readonly">
        <p style="color: red; font-weight: 300;">{{ props.error }}</p>
    </div>
</template>

<script setup>
const model = defineModel()

const props = defineProps({
    name: String,
    type: String,
    placeholder: String,
    error: String,
    readonly: Boolean
})

</script>

<style scoped>
input {
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    font-size: 9pt;
    font-family: 'roboto';
    height: 35px;
    width: 300px;
    padding: 10px;
}
input::placeholder{
    color: #BEBEBE;
}
p {
    font-family: 'carlito';
    font-size: 10pt;
    font-weight: 800;
}
</style>