import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ItemPage from './pages/ItemPage.jsx'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import AppLayout from './layouts/AppLayout.jsx'
import { AuthProvider } from './auth/AuthContext.jsx'
const router = createBrowserRouter([

  { path: '/login', element: <Login /> },

  {
    element: <ProtectedRoute />, 
    children: [
      {
        element: <AppLayout />, 
        children: [
          { index: true, element: <HomePage /> },    
          { path: '/home', element: <HomePage /> },
          { path: '/item/:id', element: <ItemPage /> },
          { path: '/category/:id', element: <CategoryPage />}
        ],
      },
    ],
  },

  { path: '*', element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
