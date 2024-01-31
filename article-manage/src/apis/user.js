/*
@Date		:2023/11/02 16:37:03
@Author		:zono
@Description:用户相关请求
*/
import {request} from "@/utils";

export function loginAPI (formData){
    // 写法一
    //  return request.post("/token", formData, {
    //     headers: {
    //       'accept': "application/json",
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   });
    // 写法二
    return request({
        url: '/token',
        method: 'POST',
        data: formData,
        headers: {
          'accept': "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
}

export function getProFileAPI (token){
    return request({
        url:'/users/me',
        method:'GET',
        headers: {
            'accept': "application/json",
            'Authorization': "Bearer " + token,
          },
    })
}