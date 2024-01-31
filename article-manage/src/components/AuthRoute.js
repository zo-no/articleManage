/*
@Date		:2023/11/01 14:31:12
@Author		:zono
@Description:高阶组件，有token就跳转，无token就返回登录
*/
import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";//重定向

//TODO 转页面时会有逻辑问题
export function AuthRoute({children}){
    const token = getToken();
    if(token)
        return <>{children}</>;
    else{
        return <Navigate to={"/login"} replace/>;
    }
}