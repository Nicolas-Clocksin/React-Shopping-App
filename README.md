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
    "password": "users_password",
    "cart": "cart_object",
    "orders": "array_of_orders",
    "paymentMethods": "array_of_payment_methods",
    "addresses": "array_of_addresses"
}
```

### Cart

```
{
    "item": "item_object",
    "quantity": "quantity_of_item_in_cart",
    "added": "boolean_if_added"
}
```

### Orders

```
{
    "id": "id_for_order",
    "userId": "id_of_user",
    "shippingAddress": "address_for_shipping",
    "billingAddress": "address_for_billing",
    "paymentMethod": "method_of_payment",
    "items": "items_for_the_order",
    "totalAmount": "total_of_the_order",
    "date": "date_order_was_created"
}
```

### Address

```
{
    "street": "street_address",
    "city": "city_address",
    "postal_code": "zip_code",
    "state": "state_abbreviation"
}
```

### Payment Method

```
{
    "id": "id_of_payment_method",
    "type": "payment_method_type",
    "cardNumber": "card_number",
    "expiration_date": "expiration_date",
    "ccv": "cvv",
    "cardHolderName": "name_of_card_holders"
}
```
