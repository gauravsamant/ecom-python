import json
import requests
from fastapi import APIRouter, Request, Response
from fastapi.responses import JSONResponse
from app.models.user_model import User

router = APIRouter()

@router.get("/allproducts")
async def products(req: Request) -> Response:

    print("calling products api")
    try:
        response = requests.get("https://fakestoreapi.com/products")
        return JSONResponse(content={"status": True, "products": json.loads(response.content), "msg": "all products"})
    except Exception as e:
        print("error: ", e)
        return JSONResponse(content={"status": True, "msg": "Logged in successfully"})
