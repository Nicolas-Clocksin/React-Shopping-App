# Current Development Plan

## To Do

- [ ] Update Complete Order Page
  - [ ] Display results of order
    - [ ] Show items ordered/total
    - [ ] Address Choosen
    - [ ] Payment method
- [ ] Add Billing section for order checkout
  - [ ] Update Shipping payment form to do both shipping/billing
  - [ ] Update Order context to accept billing
  - [ ] Associate Billing Address with payment method
  - [ ] Update order completion page to show billing address
- [ ] Create an User/Admin Page
  - [ ] User Page
    - [ ] History of Order Section
    - [ ] Ability for User to Edit Profile
    - [ ] Payment Information Section
  - [ ] Admin Permissions/Page
    - [ ] Add/Remove/Edit Users
    - [ ] Add/Remove/Edit Items for Sale
    - [ ] Add/Remove/Edit Categories
- [ ] Update sign up form
  - [ ] Remove Role Selection
- [ ] Develop Backend
- [ ] Update Styling

## Completed

- [x] Create login page
  - [x] Login will only redirect if user exists
  - [x] Allow users to sign up
- [x] Create homepage
  - [x] Displays list of products for sale
- [x] Create Cart
  - [x] Cart displays current items added
    - [x] quantity of items is shown
  - [x] Cart totals the number of items
- [x] Create item page
  - [x] Displays description of item
  - [x] Item can be added to cart
- [x] useContext for Cart
  - [x] Add/remove items from cart
  - [x] Update Quantity
    - [x] Update quantity select to dropdown
    - [x] Update quantity displayed of items in cart
- [x] Update Categories/items to useContext
- [x] Add Models for Each Object 01/06/2026
- [x] Create Checkout Process 01/28/2026
  - [x] Create Order Context
  - [x] Update objects to handle ordering/checkout process 01/26/2026
  - [x] Update forms
    - [x] Add Option to select stored payment methods/addresses 01/28/26
      - [x]Addresses 01/28/26
        - [x] Display selection of stored values 01/27/2026
        - [x] Ability to add new value (button) 01/28/26
      - [x] Payment 01/28/26
        - [x] Display selection of stored values 01/28/26
        - [x] Ability to add new value 01/28/26
    - [x] Update payment method form 01/26/2026
    - [x] Fix Dropdown for State Selection 01/26/2026
  - [x] Update Address/Payment method to store in user 01/26/2026
  - [x] Add storing of new payments/addresses into user 01/27/2026
    - [x] Add default variable for addresses/payment 01/27/2026
