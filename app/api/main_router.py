from fastapi import APIRouter

from app.routes.product_routes import product_router
from app.routes.admin_routes import admin_router

main_router = APIRouter()

main_router.include_router(product_router, prefix="/products")
main_router.include_router(admin_router, prefix="/admin")