# -*- encoding: utf-8 -*-
'''
@Date		:2023/10/26 21:50:18
@Author		:zono
@Description:转出api
'''
from fastapi import APIRouter
from .userManage import *
from .articleManage import *

v1 = APIRouter(prefix="/v1")

# 用户管理接口
v1.include_router(loginUP)#登录相关
v1.include_router(reg)#注册相关

# 文章管理接口
v1.include_router(articleOutput)
v1.include_router(articleInput)

