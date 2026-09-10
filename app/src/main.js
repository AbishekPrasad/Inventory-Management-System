import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Products from './pages/Product/Products.vue'
import Suppliers from './pages/Supplier/Suppliers.vue'
import IAM from './pages/IAM/IAM.vue'

import Transactions from './pages/Transactions.vue'
import ProductCreation from './pages/Product/ProductCreation.vue'
import SupplierCreation from './pages/Supplier/SupplierCreation.vue'
import IAMCreation from './pages/IAM/IAMCreation.vue'

import ProductUpdation from './pages/Product/ProductUpdation.vue'
import SupplierUpdation from './pages/Supplier/SupplierUpdation.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: '/products'
        },
        {
            path: '/products',
            component: Products
        },
        {
            path: '/product-creation',
            component: ProductCreation
        },
        {
            path: '/product-details/:id',
            component: ProductUpdation
        },
        {
            path: '/suppliers',
            component: Suppliers
        },
        {
            path: '/supplier-creation',
            component: SupplierCreation
        },
        {
            path: '/supplier-details/:id',
            component: SupplierUpdation
        },
        {
            path: '/iam',
            component: IAM
        },
        {
            path: '/employee-creation',
            component: IAMCreation
        },
        {
            path: '/transactions',
            component: Transactions
        }
    ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
