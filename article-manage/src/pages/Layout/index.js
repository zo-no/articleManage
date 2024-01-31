/*
@Date		:2023/10/31 19:26:07
@Author		:zono
@Description:总体布局
Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。
Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。
*/

import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons'
import './index.scss'

import 'normalize.css'
import { Outlet,useLocation,useNavigate } from 'react-router-dom'

import { clearUserInfo, fetchUserInfo} from '@/store/modules/user';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
  {
    label: '实验样式（用于练习一些小组件）',
    key: '/about',
    icon: <CustomerServiceOutlined />,
  },
]

//Outlet用于显示子组件
const GeekLayout = () => {
  
  //1.跳转
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const onMenuClick = (items) =>{
    /*
    @Description: 页面跳转
    */
    // console.log("被点击了");
    navigator(items.key)
  }

  //2.反向高亮
  //获取当前路由路径
  const location = useLocation()
  // console.log(location.pathname)
  const selectedkey = location.pathname

  useEffect(()=>{
    dispatch(fetchUserInfo())
  },[dispatch])//TODO复习

  //退出登录确认回调
  const onConfirm = async () => {
      console.log("退出");
      await dispatch(clearUserInfo())
      navigator('/login')
  }
  
  const name = useSelector(state => state.user.userInfo.username)
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirm}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu 
          mode="inline"
          theme="dark"
          items={items}
          selectedKeys={selectedkey}
          onClick={onMenuClick}
          style={{height:'100%',borderRight:0}}></Menu>
        </Sider>
        <Layout className="layout-content" style={{padding: 20}}>
          {/* 二级路由出口 */}
          <Outlet/>
        </Layout>
      </Layout>
    </Layout>
    
  );
};

export default GeekLayout;
