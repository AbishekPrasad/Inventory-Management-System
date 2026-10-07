import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Products from './pages/Product/Products.vue'
import ProductCreation from './pages/Product/ProductCreation.vue'
import ProductUpdation from './pages/Product/ProductUpdation.vue'

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
        }
    ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
