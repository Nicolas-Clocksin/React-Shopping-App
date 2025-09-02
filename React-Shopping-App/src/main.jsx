import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ItemPage from './pages/ItemPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {path: "/login", element: <Login />},
 
  {
    element: <ProtectedRoute />,
    children: [
      {path: "/home", element: <HomePage />},
      {path: "/item/:id", element: <ItemPage />},
      {path: "*", element: <NotFoundPage />},
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
