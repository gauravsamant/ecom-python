from mongoengine import *
from enum import Enum

class UserTypes(Enum):
    USER = "user"
    ADMIN = "admin"
    VENDOR = "vendor"
    MODERATOR = "moderator"


class User(Document):
    first_name = StringField(null=False)
    last_name = StringField(null=False)
    username = StringField(null=False, unique=True)
    email = EmailField(null=False, unique=True)
    phone = StringField(null=False, unique=True)
    password = StringField(null=False)
    type = EnumField(UserTypes, default=UserTypes.USER)
