import json
from fastapi import APIRouter, Request, Response
from fastapi.responses import JSONResponse
from pwdlib import PasswordHash
from app.models.user_model import User

router = APIRouter()

@router.get("/me")
async def get_user(req: Request) -> Response:
    return {"msg": "Hello World"}


@router.post("/create-user")
async def create_user(req: Request) -> Response:
    data = await req.json()
    
    password_hash = PasswordHash.recommended()
    
    data["password"] = password_hash.hash(data["password"])
    user = User(
        first_name=data["first_name"], 
        last_name=data["last_name"], 
        email=data["email"], 
        phone=data["phone"], 
        password=data["password"]
        )
    user.save()
    
    print("user", json.loads(user.to_json()))
    
    if user:
        print("user", user)
        res = JSONResponse(content={"status":True, "msg":"User created successfully."})
    else:
        res = JSONResponse(content={"status":False, "msg":"User creation failed."})
    
    return res