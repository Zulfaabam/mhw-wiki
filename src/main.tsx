import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import WeaponDetails from "./pages/WeaponDetails.tsx";
import { WeaponsProvider } from "./context/WeaponsContext.tsx";

const theme = createTheme({
  typography: {
    fontFamily: ['"Zen Old Mincho"', "system-ui"].join(","),
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/weapons/:weaponId",
    element: (
      <WeaponsProvider>
        <WeaponDetails />
      </WeaponsProvider>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
