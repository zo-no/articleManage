/*
@Date		:2023/11/04 21:10:19
@Author		:zono
@Description: 文章有关接口函数
*/
import { request } from "@/utils";

export function getChannalAPI() {
  /*
    @Description:一个获取频道的接口
    */
  return request({
    url: "/channels",
    method: "GET",
  });
}

export function articleInput(data) {
  /*
  @Description:上传文章接口
  */
  return request({
    url: "/artcleInput",
    method: "POST",
    data,
  });
}
