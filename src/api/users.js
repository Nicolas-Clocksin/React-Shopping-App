/*
  Title: users API
  Created By: Nicolas Clocksin

  Description: API functions to manage users.
*/
import "../types.js";
/**
 *
 * @returns {Promise<User[]>}
 */
export async function UserList() {
  return [
    {
      id: 1,
      name: "username",
      role: "user",
      email: "email@email.com",
      password: "test",
      orders: [],
      cart: [
        {
          item: {
            id: 1,
            name: "Teddy Bear",
            price: 30,
            imgUrl:
              "https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=F4252bOrMfRTB8kWm2oM2jlb9JXY08tKCaO5G_ms1Uw=",
            price: 30,
            category: 1,
            description: "this is a toy",
          },
          quantity: 2,
        },
        {
          item: {
            id: 3,
            name: "Game",
            price: 60,
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/250px-God_of_War_4_cover.jpg",
            category: 2,
            description: "Video Game",
          },
          quantity: 1,
        },
      ],
      paymentMethods: [
        {
          id: 1,
          nameOnCard: "John Doe",
          cardType: "visa",
          cardNumber: "4111111111111111",
          expirationDate: "12/25",
          cvv: "123",
          isDefault: true,
        },
      ],
      addresses: [
        {
          id: 1,
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zipCode: "12345",
          country: "USA",
          isDefault: true,
        },
      ],
    },
    {
      id: 2,
      name: "username",
      role: "user",
      email: "test@test.com",
      password: "test",
      orders: [],
      cart: [
        {
          item: {
            id: 2,
            name: "Game",
            price: 40,
            imgUrl:
              "https://store-images.s-microsoft.com/image/apps.808.14492077886571533.be42f4bd-887b-4430-8ed0-622341b4d2b0.c8274c53-105e-478b-9f4b-41b8088210a3?q=90&w=177&h=265",
            category: 2,
            description: "Video Game",
          },
          quantity: 1,
        },
      ],
      paymentMethods: [
        {
          id: 1,
          nameOnCard: "John Doe",
          cardType: "visa",
          cardNumber: "4111111111111111",
          expirationDate: "12/25",
          cvv: "123",
          isDefault: true,
        },
      ],
      addresses: [
        {
          id: 1,
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zipCode: "12345",
          country: "USA",
          isDefault: true,
        },
      ],
    },
    {
      id: 3,
      name: "admin",
      role: "admin",
      email: "admin@test.com",
      password: "test",
      orders: [],
      cart: [],
      paymentMethods: [
        {
          id: 1,
          nameOnCard: "John Doe",
          cardType: "visa",
          cardNumber: "4111111111111111",
          expirationDate: "12/25",
          cvv: "123",
          isDefault: true,
        },
      ],
      addresses: [
        {
          id: 1,
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zipCode: "12345",
          country: "USA",
          isDefault: true,
        },
      ],
    },
  ];
}
/**
 * @param {Pick<User, "name"|"role"|"email"|"password">} data
 * @returns {Promise<User>}
 */
export async function addUser({ name, role, email, password }) {
  return {
    id: Math.random(),
    name,
    role,
    email,
    password,
    orders: [],
    cart: [],
    paymentMethod: [],
    addresses: [],
  };
}
