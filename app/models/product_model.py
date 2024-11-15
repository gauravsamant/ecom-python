from mongoengine import *

class Category(Document):
    name = StringField(null=False, unique=True)
    description = StringField(blank=True, null=True)
    parent_catergory_id = ReferenceField("self", reverse_delete_rule=DO_NOTHING)

class Product(Document):
    title = StringField(null=False)
    description = StringField(null=False)
    price = DecimalField(null=False, precision=2)
    stock = IntField()
    category = ReferenceField("Category")
    imageURL = StringField(null=False)
    updated_at = DateTimeField(auto_add_now=True)
    created_at = DateTimeField(required=False)