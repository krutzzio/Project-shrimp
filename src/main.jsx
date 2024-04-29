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
import Home from './pages/Home.jsx';
import { PerfilCliente } from "./pages/PerfilCliente.jsx";
import Recetas_guardadas from "./components/Recetas_guardadas.jsx";
import Recetas_hechas from "./components/Recetas_hechas.jsx";
import Promociones from "./components/Promociones.jsx";
import { Receta } from "./pages/Receta.jsx";
import { PerfilRestauranteVistaCliente } from "./pages/PerfilRestauranteVistaCliente.jsx";
import { RegisterProvider } from './contexts/RegisterContext.jsx';
import PerfilRestaurante from './pages/PerfilRestaurante.jsx';
import Busqueda from './pages/Busqueda.jsx';
/* import { RegisterReceta } from './pages/RegisterReceta.jsx';
import { CrearProcedimientos } from './pages/CrearProcediminetos.jsx'; */
import { UserInfoProvider } from './contexts/UserInfoContext.jsx';



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
    element: <Home />,
  },
  {
    path: "/perfil",
    element: <PerfilCliente />,

  },
  {
    path: "perfil/recetas-hechas",
    element: <Recetas_hechas />,
  },
  {
    path: "perfil/recetas-guardadas",
    element: <Recetas_guardadas />,
  },
  {
    path: "/perfil/promos",
    element: <Promociones />,
  },
  {
    path: "/perfil/restaurante-cliente",
    element: <PerfilRestauranteVistaCliente />
  },
  {
    path: "/receta/:id",
    element: <Receta />

  },
  {
    path: "/perfil-restaurante",
    element: <PerfilRestaurante />

  },
  {
    path: "/busqueda",
    element: <Busqueda />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <ThemeProvider>
      <RegisterProvider>
        <UserInfoProvider>
          <main className="h-screen client-theme">
            <RouterProvider router={router} />
          </main>
        </UserInfoProvider>
      </RegisterProvider>
    </ThemeProvider>
  </NextUIProvider>
)
