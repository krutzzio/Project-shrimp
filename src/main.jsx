import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { NextUIProvider } from "@nextui-org/react";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import LandingPage from './pages/LandingPage.jsx';
import CreateProfile from './pages/CreateProfile.jsx';
import HomeRecetas from './pages/HomeRecetas.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: "/create/:profileType",
    element: <CreateProfile />
  },
  {
    path: "/home",
    element: <HomeRecetas />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* Podem fer un context per pasar el tema de (fosc a clar) */}
    <NextUIProvider>
      <ThemeProvider>
        <main className="h-dvh client-theme">
          <RouterProvider router={router} />
        </main>
      </ThemeProvider>
    </NextUIProvider>
  </>,
)
