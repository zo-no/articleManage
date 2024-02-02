/*
@Date		:2023/10/29 17:23:50
@Author		:zono
@Description:项目入口文件
*/
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import App from "./App";

// //全局变量
import store from "./store";
import { Provider } from "react-redux";
//路由
import { RouterProvider } from 'react-router-dom'
// 1. 导入路由router
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //严格模式会让组件渲染两次
    <Provider store={store}>
      {/* 2. 路由绑定 */}
      <RouterProvider router={router}></RouterProvider>
      {/* <App/> */}
    </Provider>
  // </React.StrictMode>
);