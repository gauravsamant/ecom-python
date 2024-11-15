from fastapi import APIRouter
from app.controllers.admin import add_products_in_bulk

admin_router = APIRouter()

admin_router.include_router(add_products_in_bulk.router)