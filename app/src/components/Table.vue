<script setup>

</script>

<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Reference Number</th>
                    <th>Transaction Type</th>
                    <th>Quality</th>
                    <th>Performed By</th>
                    <th>Resulting Stock</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    .table-container {
        width: 100%;
        max-height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        border: 1px solid #c7c7c7;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        font-family: "Carlito", sans-serif;
    }

    thead th {
        position: sticky;
        top: 0;
        z-index: 10;

        height: 50px;
        background: #f9f9f9;

        font-size: 18px;
        font-weight: 700;
        text-align: center;
        font-size: 10pt;
        border-bottom: 2px solid #c7c7c7;
    }

    tbody td {
        height: 42px;
        padding: 10px;

        text-align: center;
        font-size: 17px;

        border-right: 2px solid #c7c7c7;
    }

    tbody td:last-child {
        border-right: none;
    }
</style>
