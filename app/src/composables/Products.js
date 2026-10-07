import axios from 'axios';

const API = 'http://localhost:8000';

export async function onLaunch(product, router) {
    try {
        let imagePath = '';

        if (product.image instanceof File) {
            const formData = new FormData();
            formData.append('image', product.image);

            const response = await axios.post(`${API}/upload-image`, formData);
            imagePath = response.data.image;
        }

        const newProduct = {
            name: product.name,
            category: product.category,
            supplier: product.supplier,
            price: product.price,
            ISQ: product.ISQ,
            reorderLevel: product.reorderLevel,
            weight: product.weight,
            image: imagePath,
            description: product.description
        };

        await axios.post(`${API}/products`,newProduct);
        router.push('/products');

    } catch (error) {
        console.error(
            'Product creation failed:',
            error.response?.data || error.message
        );
    }
}

export async function onEdit(product, route, router) {
    try {
        let imagePath = product.image;

        if (product.image instanceof File) {
            const formData = new FormData();
            formData.append('image', product.image);

            const response = await axios.post(`${API}/upload-image`, formData);
            imagePath = response.data.image;
        }

        const updatedProduct = {
            id: product.id,
            name: product.name,
            sku: product.sku,
            category: product.category,
            supplier: product.supplier,
            price: product.price,
            ISQ: product.ISQ,
            reorderLevel: product.reorderLevel,
            weight: product.weight,
            image: imagePath,
            description: product.description
        };

        await axios.put(`${API}/products/${route.params.id}`,updatedProduct);

        router.back();

    } catch (error) {
        console.error(
            'Product update failed:',
            error.response?.data || error.message
        );
    }
}

export async function onDelete(id, router) {
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }

    try {
        await axios.delete(`${API}/products/${id}`);
        router.push('/products');

    } catch (error) {
        console.error(
            'Product deletion failed:',
            error.response?.data || error.message
        );
    }
}