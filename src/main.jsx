import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import Perfil_cliente from "./components/Perfil_cliente.jsx";
import Recetas_guardadas from "./components/Recetas_guardadas.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Recetas_hechas from "./components/Recetas_hechas.jsx";
import Promociones from "./components/Promociones.jsx";
import Recetas_vista from "./components/Recetas_vista.jsx";

const router = createBrowserRouter([
  {
    path: "/Recetas_vista",
    element: <Recetas_vista />,
  },
  {
    path: "/Promociones",
    element: <Promociones />,
  },
  {
    path: "/Recetas_hechas",
    element: <Recetas_hechas />,
  },
  {
    path: "/Perfil_cliente",
    element: <Perfil_cliente />,
  },
  {
    path: "/Recetas_guardadas",
    element: <Recetas_guardadas />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Podem fer un context per pasar el tema de (fosc a clar) */}
    <NextUIProvider>
      <main className="h-screen light text-foreground bg-background">
      <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
