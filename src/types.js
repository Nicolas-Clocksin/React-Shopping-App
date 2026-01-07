/**
 * @typedef {Object} Item
 * @property {number} id - Unique identifier for the item
 * @property {number} category - Category ID the item belongs to
 * @property {string} name - Name of the item
 * @property {string} description - Description of the item
 * @property {string} imgUrl - URL of the item's image
 * @property {number} price - Price of the item
 */

/**
 * @typedef {Object} Category
 * @property {number} id - Unique identifier for the category
 * @property {string} name - Name of the category
 */

/**
 * @typedef {Object} CartEntry
 * @property {Item} item - The item in the cart
 * @property {number} quantity - Quantity of the item in the cart
 */

/**
 * @typedef {Object} User
 * @property {number} id - Unique identifier for the user
 * @property {string} name - Name of the user
 * @property {string} role - Role of the user (user or admin)
 * @property {string} email - Email of the user
 * @property {string} password - Password of the user
 * @property {CartEntry[]} cart - Items in the user's cart
 * @property {Object[]} orders - Orders made by the user
 * @property {Object[]} paymentMethods - Payment methods of the user
 * @property {Address[]} addresses - Addresses of the user
 */

/**
 * @typedef {Object} Address
 * @property {number} id - Unique identifier for the address
 * @property {string} street - Street address
 * @property {string} city - City
 * @property {string} state - State
 * @property {string} zipCode - ZIP code
 * @property {string} country - Country
 * @property {boolean} isDefault - Indicates if this is the default address
 */

/**
 * @typedef {Object} Order
 * @property {number} id - Unique identifier for the order
 * @property {number} userId - ID of the user who made the order
 * @property {CartEntry[]} items - Items in the order
 * @property {number} totalAmount - Total amount of the order
 * @property {PaymentMethod} paymentMethod - Payment method used for the order
 * @property {Address} shippingAddress - Shipping address for the order
 * @property {Address} billingAddress - Billing address for the order
 * @property {string} date - Date of the order
 */

/**
 * @typedef {Object} PaymentMethod
 * @property {number} id - Unique identifier for the payment method
 * @property {string} type - Type of payment method (e.g., credit card, PayPal)
 * @property {int} cardNumber - Card number
 * @property {string} expiryDate - Expiration date
 * @property {string} nameOnCard - Name of the card holder
 * @property {int} cvv - CVV code
 * @property {boolean} isDefault - Indicates if this is the default payment method
 */
