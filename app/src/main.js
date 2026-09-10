import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Products from './pages/Products.vue'
import Suppliers from './pages/Suppliers.vue'
import IAM from './pages/IAM.vue'

import Transactions from './pages/Transactions.vue'
import ProductCreation from './pages/ProductCreation.vue'
import SupplierCreation from './pages/SupplierCreation.vue'
import IAMCreation from './pages/IAMCreation.vue'

import ProductUpdation from './pages/ProductUpdation.vue'

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
