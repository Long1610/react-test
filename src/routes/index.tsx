import { useRoutes } from "react-router-dom";
import RequireAuth from "@/components/require-auth";
import About from "@/pages/about";
import Home from "@/pages/home";
import LoginPage from "@/pages/login";
import Menu from "@/pages/menu";
import Protected from "@/pages/protected";
import Layout from "@/components/common-layout";

function routes() {
  const routes = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/about", element: <About /> },
        { path: "/login", element: <LoginPage /> },
        {
          element: <RequireAuth children={null} />,
          children: [
            { path: "/protected", element: <Protected /> },
            { path: "/menu", element: <Menu /> },
          ],
        },
      ],
    },
  ]);
  return routes;
}

export default routes;
