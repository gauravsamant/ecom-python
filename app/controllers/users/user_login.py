import json
from fastapi import APIRouter, Request, Response
from fastapi.responses import JSONResponse
from pwdlib import PasswordHash
from app.models.user_model import User

router = APIRouter()

@router.post("/login")
async def create_user(req: Request) -> Response:
    data = await req.json()
    cookies = req.cookies
    
    password_match = False
    
    print("cookies", cookies)
    
    password_hash = PasswordHash.recommended()
    
    user = User.objects.get(email=data["email"])
    
    if user:
       password_match = password_hash.verify(data["password"], user.password)
       
    if password_match:
        print("password match")
        return JSONResponse(content={"status": True, "msg": "Logged in successfully"})
    else:
        print("password didn't match")
        return JSONResponse(content={"status": False, "msg": "Log in failed"})
