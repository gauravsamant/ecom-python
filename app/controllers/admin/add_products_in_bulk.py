from fastapi import APIRouter, Request, Response, File, UploadFile
from fastapi.responses import JSONResponse
from app.models.user_model import User
import pandas as pd
from io import StringIO

router = APIRouter()

# 0 - id
# 1 - type
# 2 - sku
# 3 - Name
# 4 - Published
# 5 - Is featured
# 6 - Visibility in catalogue
# 7 - Short description
# 8 - Description
# 9 - Date sale price starts
# 10 - Date sale price ends
# 11 - Tax status
# 12 - Tax class
# 13 - In stock
# 14 - Stock
# 15 - Low stock amount
# 16 - Backorders allowed
# 17 - Sold individually
# 18 - Weight (kg)
# 19 - Length (cm)
# 20 - Width (cm)
# 21 - Height (cm)
# 22 - Allow customer reviews
# 23 - Purchase note
# 24 - Sale price
# 25 - Regular price
# 26 - Categories
# 27 - Tags
# 28 - Shipping class
# 29 - Images
# 30 - Download limit
# 31 - Download expiry days
# 32 - Parent
# 33 - Grouped products
# 34 - Upsells
# 35 - Cross-sells
# 36 - External URL
# 37 - Button text
# 38 - Position
# 39 - Attribute 1 name
# 40 - Attribute 1 value(s)


@router.post("/addProductsInBulk")
async def add_products_in_bulk(file: UploadFile = File()) -> Response:
    data = await file.read()
    data = pd.read_csv(StringIO(data.decode("utf-8")), header=0, usecols=[41, 42, 43, 44])
    # for d in data:
    #     print(d)
    print(data[:1])
    # file_content = data.split("\\n")
    # # pprint.pprint(file_content)
    # for d in file_content[1:]:       
    #     print(d)
    try:
        return JSONResponse(content={"status": True, "add products": "product file", "msg": "add products"})
    except Exception as e:
        print("error: ", e)
        return JSONResponse(content={"status": True, "msg": "Logged in successfully"})