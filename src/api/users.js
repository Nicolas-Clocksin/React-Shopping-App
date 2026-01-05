/*
  Title: users API
  Created By: Nicolas Clocksin

  Description: API functions to manage users.
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
      cart: [],
      paymentMethod: [],
      addresses: [],
    },
    {
      id: 2,
      name: "username",
      role: "user",
      email: "test@test.com",
      password: "test",
      orders: [],
      cart: [],
      paymentMethod: [],
      addresses: [],
    },
    {
      id: 3,
      name: "admin",
      role: "admin",
      email: "admin@test.com",
      password: "test",
      orders: [],
      cart: [],
      paymentMethod: [],
      addresses: [],
    },
  ];
}

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
