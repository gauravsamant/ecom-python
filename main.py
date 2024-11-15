from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.connect_db import db_engine

from app.api.main_router import main_router

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins, 
    allow_credentials=True, 
    allow_methods=["*"], 
    allow_headers=["*"]
    )


if db_engine:
    print("Server running")
    
    app.include_router(main_router, prefix="/api/v1")
    
    @app.get("/")
    def root():
        return {"msg": "main page"}
