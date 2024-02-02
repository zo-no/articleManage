import Login from "@/pages/Login";
import Article from "@/pages/Acticle";

import Layout from "@/pages/Layout";
import About from "@/pages/About";
import NotFound from '@/pages/Notfound'

import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import Home from "@/pages/Home";
import Publish from "@/pages/Publish";
//创建router实例对象，并配置路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,//默认二级路由
        element: <Home />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "publish",
        element: <Publish />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
