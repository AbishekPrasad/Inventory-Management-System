from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import json
import os
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"]
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "db.json")
IMAGE_DIR = os.path.join(BASE_DIR, "public", "images")

os.makedirs(IMAGE_DIR, exist_ok=True)

app.mount(
    "/images",
    StaticFiles(directory=IMAGE_DIR),
    name="images"
)

class ProductCreate(BaseModel):
    name: str
    category: str
    supplier: str
    price: float
    ISQ: int
    reorderLevel: int
    weight: float
    image: str = ""
    description: str = ""

class Product(BaseModel):
    id: str
    name: str
    sku: str
    category: str
    supplier: str
    price: float
    ISQ: int
    reorderLevel: int
    weight: float
    image: str = ""
    description: str = ""

@app.get("/products/{id}")
def get_product(id: str):
    with open(DB_PATH, "r", encoding="utf-8") as file:
        db = json.load(file)

    for product in db["products"]:
        if str(product["id"]) == id:
            return product

    raise HTTPException(status_code=404, detail="Product not found")

@app.post("/products")
def create_product(product: ProductCreate):
    with open(DB_PATH, "r", encoding="utf-8") as file:
        db = json.load(file)

    products = db["products"]

    if products:
        new_id = str(
            max(
                int(item["id"])
                for item in products
            ) + 1
        )

        new_sku_number = max(
            int(item["sku"].split("-")[1])
            for item in products
        ) + 1
    else:
        new_id = "1"
        new_sku_number = 101

    new_product = {
        "id": new_id,
        "name": product.name,
        "sku": f"PRD-{new_sku_number}",
        "category": product.category,
        "supplier": product.supplier,
        "price": product.price,
        "ISQ": product.ISQ,
        "reorderLevel": product.reorderLevel,
        "weight": product.weight,
        "image": product.image,
        "description": product.description
    }

    products.append(new_product)

    with open(DB_PATH, "w", encoding="utf-8") as file:
        json.dump(db, file, indent=4)

    return new_product

@app.put("/products/{id}")
def update_product(id: str, product: Product):
    with open(DB_PATH, "r", encoding="utf-8") as file:
        db = json.load(file)

    for index, item in enumerate(db["products"]):
        if str(item["id"]) == id:
            db["products"][index] = product.model_dump()

            with open(DB_PATH, "w", encoding="utf-8") as file:
                json.dump(db, file, indent=4)

            return db["products"][index]

    raise HTTPException(status_code=404, detail="Product not found")

@app.delete("/products/{id}")
def delete_product(id: str):
    with open(DB_PATH, "r", encoding="utf-8") as file:
        db = json.load(file)

    for index, product in enumerate(db["products"]):
        if str(product["id"]) == id:
            deleted_product = db["products"].pop(index)

            with open(DB_PATH, "w", encoding="utf-8") as file:
                json.dump(db, file, indent=4)

            return deleted_product

    raise HTTPException(status_code=404, detail="Product not found")

@app.post("/upload-image")
async def upload_image(image: UploadFile = File(...)):
    extension = os.path.splitext(image.filename or "")[1]
    filename = f"{uuid.uuid4()}{extension}"
    file_path = os.path.join(IMAGE_DIR, filename)

    contents = await image.read()

    with open(file_path, "wb") as file:
        file.write(contents)

    return {
        "image": f"/images/{filename}"
    }