import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      // { path: "profile/:username", element: <Profile /> },
    ],
  },

  // { path: "/login", element: <LoginPage /> },
  // { path: "/register", element: <RegisterPage /> },
  // { path: "*", element: <NotFoundPage /> },
];

const router = createBrowserRouter(routes);

export default router;
