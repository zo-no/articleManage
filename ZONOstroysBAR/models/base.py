# -*- encoding: utf-8 -*-
'''
@Date		:2023/10/04 22:21:31
@Author		:zono
@Description:规范后端与数据库的交互格式，数据库模型。    对应Djongo的orm
'''

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date, DateTime, func
from sqlalchemy.orm import relationship

from database.sqlite import Base


class User(Base):  # 元类
    """
    @description  :
    用户表：
    id:用户id,自增长
    username:用户名不可空、注解
    hashed_password:密码
    is_active:权限
    """
    # 表名
    __tablename__ = "users"
    # 字段
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    # items = relationship("Item", back_populates="owner")#关联表Item

    # created_at = Column(DateTime,server_default=func.now())
    # updated_at = Column(DateTime,server_default=func.now(),onupdate=func.now())#只在更新时调用

    # __mapper_args__ = {
    #     'order_by': id.desc()# 按id倒序排列
    # }

    # def __repr__(self):
    #     return f"<User {self.id}>"


class Article(Base):
    """
    @description  :
    文章表：
    id:文章id,自增长
    table:用户名不可空、注解
    hashed_password:密码
    is_active:权限
    """
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True,autoincrement=True)
    title = Column(String, index=True)
    channels_id = Column(Integer)#ForeignKey("channels.id"),
    content = Column(String, index=True)
    # owner_id = Column(Integer, ForeignKey("users.id"))

    # TODO研究下relationship使用
    # owner = relationship("User", back_populates="Article")


# TODO 将想好的表创建

# TODO 解决表的实时变动
