from fastapi import APIRouter
from app.controllers.users import create_user, user_login

user_router = APIRouter()

user_router.include_router(create_user.router)
user_router.include_router(user_login.router)