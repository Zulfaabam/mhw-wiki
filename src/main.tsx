import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.tsx";
import WeaponDetails from "./pages/WeaponDetails.tsx";
import { WeaponsProvider } from "./context/WeaponsContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import WeaponsList from "./pages/WeaponsList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/weapons",
    element: (
      <WeaponsProvider>
        <WeaponsList />
      </WeaponsProvider>
    ),
  },
  {
    path: "/weapons/:weaponId",
    element: (
      <WeaponsProvider>
        <WeaponDetails />
      </WeaponsProvider>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
