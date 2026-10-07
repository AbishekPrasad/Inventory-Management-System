export function uploadImage(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    product.image = file;
    imagePreview.value = URL.createObjectURL(file);
}

export async function onLaunch() {
    let imagePath = "";

    if (product.image) {
        const formData = new FormData();
        formData.append("image", product.image);

        const imageResponse = await fetch(
            'http://localhost:8000/upload-image',
            {
                method: 'POST',
                body: formData
            }
        );

        if (!imageResponse.ok) {
            console.error(await imageResponse.text());
            return;
        }

        const imageData = await imageResponse.json();
        imagePath = imageData.image;
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

    const response = await fetch(
        'http://localhost:8000/products',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }
    console.log("LAUNCH CLICKED")
    router.push('/products');
}

export async function onEdit() {
    let imagePath = product.image;

    if (product.image instanceof File) {
        const formData = new FormData();
        formData.append("image", product.image);

        const imageResponse = await fetch(
            'http://localhost:8000/upload-image',
            {
                method: 'POST',
                body: formData
            }
        );

        if (!imageResponse.ok) {
            console.error(await imageResponse.text());
            return;
        }

        const imageData = await imageResponse.json();
        imagePath = imageData.image;
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

    const response = await fetch(
        `http://localhost:8000/products/${route.params.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }

    router.back();
}

export async function onDelete() {
    if (!confirm("Are you sure you want to delete this product?")) {
        return;
    }

    const response = await fetch(
        `http://localhost:8000/products/${route.params.id}`,
        {
            method: 'DELETE'
        }
    );

    if (!response.ok) {
        console.error(await response.text());
        return;
    }

    router.push('/products');
}
 