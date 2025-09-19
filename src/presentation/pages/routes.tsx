
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../components/Layout.tsx"
import HomePage from "../pages/HomePage"
import ServiciosPas from "../pages/ServiciosPas.tsx"
import SegurosPage from "../pages/SegurosPage.tsx"
import NosotrosPage from "../pages/NosotrosPage.tsx"
import SumatePage from "./SumatePage.tsx"

// Configuración de rutas CORREGIDA
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout que contiene el Navbar
    children: [
      {
        index: true, // Ruta principal "/"
        element: <HomePage />,
      },
      {
        path: "servicios", // Ruta "/servicios"
        element: <ServiciosPas />,
      },
      {
        path: "seguros", // Ruta "/seguros"
        element: <SegurosPage />,
      },
      {
        path: "nosotros", // Ruta "/nosotros"
        element: <NosotrosPage />,
      },
      {
        path: "sumate", // Ruta "/sumate"
        element: <SumatePage />,
      },
    ],
  },
])

// Componente principal del router
export default function AppRouter() {
  return <RouterProvider router={router} />
}
