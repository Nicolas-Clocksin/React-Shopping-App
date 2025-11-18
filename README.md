# React-Shopping-App

## Application Summary

    This is a web based application using React to create a demonstration of a e-commerce shopping site. The website is used for ordering items. Users will be able to login and add items to cart. They can then checkout for orders to be shipped.

## Set up

    - Install Node.js 18+
    - Run npm install
    - run `npm run dev` to start up environment

## Application Flow

    1. Login Screen
        - can sign in using default (email: test@test.com password: test)
        - can sign up by clicking sign up
    2. Home Screen
        - Can select items to add to cart/browse items available
    3. Cart
        - Items added in can be viewed and checked out

## Models

### Categories

```
{
    "id": "id_of_category",
    "name": "name_of_category",
}
```

### Items

```
{
    "id": "id_of_item",
    "category": "associated_category_id",
    "name": "name_of_item",
    "description": "description_of_item",
    "imgUrl": "link_to_item_image",
    "price": "cost_of_item",
}
```

### Users

```
{
    "id": "id_of_user",
    "name": "user_name",
    "role": "user_assigned_role",
    "email": "users_email",
    "password": "users_password"
}
```

### Cart

```
{
    "item": "item_object",
    "quantity": "quantity_of_item_in_cart",
    "added": "boolean_if_added",
    "user": "user_associated_with_cart"
}
```

### Orders

```
{

}
```
