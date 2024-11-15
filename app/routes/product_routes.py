from fastapi import APIRouter
from app.controllers.products import products

product_router = APIRouter()

product_router.include_router(products.router)
