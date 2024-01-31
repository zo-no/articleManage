/*
@Date		:2023/10/31 17:07:02
@Author		:zono
@Description:记录用户登录后的信息
1、获取token
*/
import { createSlice } from "@reduxjs/toolkit";
import { removeToken, request } from "@/utils";
import { setToken as _setToken, getToken } from "@/utils";
import { loginAPI, getProFileAPI } from '@/apis/user'

const userStore = createSlice({
  name: "username",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      _setToken(action.payload);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.token = "";
      state.userInfo = {};
      removeToken();
    },
  },
});

//导出
const { setToken, setUserInfo, clearUserInfo } = userStore.actions;

const fetchLogin = (loginForm) => {
  /*
  @Description: 异步请求获取token,并返回应该promise函数
  */
  const { username, password } = loginForm;
  const requestData = {
    grant_type: "",
    username,
    password,
    scope: "",
    client_id: "",
    client_secret: "",
  };
  return async (dispatch) => {
    //分布异步请求，并存入
    const res = await loginAPI(requestData);
    // console.log(res);
    dispatch(setToken(res.data.access_token));
  };
};


const fetchUserInfo = () => {
  /*
  @Description: 用Token请求个人数据
  */
  //  console.log(123);
  const token = getToken();
  return async (dispatch) => {
    // TODO 报错封装
    // if (token) {
      
    //   request
    //     .get("/users/me", {
    //       headers: {
    //         accept: "application/json",
    //         Authorization: "Bearer " + token,
    //       },
    //     })
    //     .then((response) => {
    //       console.log("请求成功了");
    //       console.log(response.data);
    //       dispatch(setUserInfo(response.data));
    //     })
    //     .catch((error) => {
    //       // 处理错误
    //       // err报错调整
    //       console.error(
    //         "请求失败:无法获取用户信息。",
    //         error.response.data.detail
    //       );
    //     });
    // } else {
    //   console.log("用户未登录。");
    // }
    const res = await getProFileAPI(token)  
    console.log("请求用户信息成功了");
    console.log(res);
    dispatch(setUserInfo(res.data));
  };
};

const userReducer = userStore.reducer;

export { fetchLogin, fetchUserInfo, clearUserInfo };
export default userReducer;
