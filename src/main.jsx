
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
import Perfil_cliente from "./pages/Perfil_cliente.jsx";

import Recetas_guardadas from "./components/Recetas_guardadas.jsx";
import Recetas_hechas from "./components/Recetas_hechas.jsx";
import Promociones from "./components/Promociones.jsx";

import Recetas from "./pages/Recetas.jsx";
import Perfil_Restaurante_Cliente from "./pages/Perfil_Restaurante_Cliente.jsx";
import Recetas_componente from './components/Recetas_componente.jsx';
import { RegisterProvider } from './contexts/RegisterContext.jsx';

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
  },
  {
    path: "/perfil",
    element: <Perfil_cliente />,
    children: [
      {
        path: "perfil/recetas-guardadas",
        element: <Recetas_guardadas />,
      },
      {
        path: "perfil/recetas-hechas",
        element: <Recetas_hechas />,
      },
      {
        path: "perfil/promos",
        element: <Promociones />,
      },
      {
        path: "perfil/restaurantes-seguidos",
        element: <Recetas />,
      }
    ]
  },
  {
    path: "/Perfil_Restaurante_Cliente",
    element: <Perfil_Restaurante_Cliente />
  },
  {
    path: "/Recetas_componente",
    element: <Recetas_componente/>
  },
  {
    path: "/Recetas",
    element: <Recetas />

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <ThemeProvider>
      <RegisterProvider>
        <main className="h-dvh client-theme">
          <RouterProvider router={router} />
        </main>
      </RegisterProvider>
    </ThemeProvider>
  </NextUIProvider>
)
