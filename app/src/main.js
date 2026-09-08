import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Products from './pages/Products.vue'
import Suppliers from './pages/Suppliers.vue'
import IAM from './pages/IAM.vue'
import Transactions from './pages/Transactions.vue'

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
            path: '/suppliers',
            component: Suppliers
        },
        {
            path: '/iam',
            component: IAM
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
