<template>
    <div class="maintable">
        <div class="header">
            <slot name="heading"></slot>
        </div>
        <div class="items">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
import SearchBar from './Searchbar.vue'
import Plainbar from './Plainbar.vue'
</script>

<style scoped>
    h6 {
        font-family: 'roboto';
        font-size: 11px;
    }

    .items {
        overflow-y: scroll;
        min-height: auto;
        max-height: 375px;
        overflow-x: hidden;
    }

    .maintable {
        border: 1px solid #e1e1e1;
        margin-left: 50px;
        width: 1132px;
        border-radius: 10px;
        overflow: hidden;
    }

    .header {
        font-family: 'Roboto';
        height: 40px;
        background-color: #F9F9F9;
        color: #7b7b7b;
        display: flex;
        justify-content: space-evenly;
        gap: 100px;
        align-items: center;
        padding-left: 50px;
        box-shadow: 1px 1px 2px rgb(235, 235, 235);
    }

    .header h6 {
        margin: 0;
    }
</style>