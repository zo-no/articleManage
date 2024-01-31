/*
@Date		:2023/10/31 19:25:28
@Author		:zono
@Description:登录页
*/
import { Card, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchLogin } from "@/store/modules/user";
import "./index.scss";
import logo from "@/assets/logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const onFinish = async (values) => {
    //一个固定的读取表单的函数
    // console.log( values);
    // 触发请求
    await dispatch(fetchLogin(values));
    // 登录成功后跳转首页，并提示用户（避免异步）
    navigator("/");
    message.success("登录成功");
  };
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="username" //与后端对应
            // 多条校验逻辑 先校验第一条 第一条通过之后再校验第二条
            rules={[
              {
                required: true,
                message: "请输入学号",
              },
              // 正则需要学习 {
              //   pattern: /^1[3-9]\d{10}$/,
              //   message: "请输入正确的学号格式",
              // },
            ]}
          >
            <Input size="large" placeholder="请输入学号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input size="large" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
