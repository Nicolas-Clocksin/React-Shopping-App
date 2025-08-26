export async function UserList(){
    return[{
      id: 1,
      name: 'username',
      role: 'user',
      email: 'email@email.com',
      password: 'test'
    },
    {
      id: 2,
      name: 'admin',
      role: 'admin',
      email: 'admin@email.com',
      password: 'test'
    }]
}

export async function addUser({name, role, email, password}){
    return{
        id: Math.random(),
        name,
        role,
        email,
        password
    }
}