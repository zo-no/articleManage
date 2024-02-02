/*
@Date		:2023/11/04 21:27:47
@Author		:zono
@Description:发布页
*/
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getChannalAPI, articleInput } from "@/apis/article";

const { Option } = Select;

const Publish = () => {
  //获取频道列表
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const getChannalList = async () => {
      //XXX 异步函数会自动解析promise
      const res = await getChannalAPI();
      // console.log(res);
      setChannelList(res.data.channels);
    };
    getChannalList();
  }, []);
  // console.log(channelList);
  // 提交表单
  const name = useSelector((state) => state.user.userInfo.username);
  const onFinish = (values) => {
    // values.username = name;
    const data = {
      title: values.title,
      channels_id: values.channels_id,
      content: values.content,
    };
    console.log(data);
    articleInput(data);
  };

  //上传回调
  const onChange = () => {
    console.log("正在上传中");
  };
  //切换图片封面

  //回填数据

  //获取实例

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>首页</Link> },
              // { title: `${articleId ? '编辑' : '发布'}文章` },
            ]}
          ></Breadcrumb>
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish} //回调
          //   form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>

          <Form.Item
            label="频道"
            name="channels_id"
            rules={[{ required: true, message: "请选择文章频道" }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {/* value属性用户选中之后会自动收集起来作为接口的提交字段 */}
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="封面">
            <Form.Item label="type">
              <Radio.Group>
                <Radio value={1}>单图</Radio>
                <Radio value={2}>三图</Radio>
                <Radio value={3}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {/* 
            listType: 决定选择文件框的外观样式
            showUploadList: 控制显示上传列表
        */}

            <Upload
              listType="picture-card"
              showUploadList
              action={"http://geek.itheima.net/v1_0/upload"}
              name="image"
              onChange={onChange}
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>
          </Form.Item>

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            {/* 富文本编辑器 */}
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
