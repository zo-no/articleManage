这是一个前端脚手架（对自己那种），目前开发了登录页，后端也可以连接上了。

# BUG

- [x] 登录跳转的异步失效（解决：promise才能使用await方法）
- [] 有一个bug，当第一次被渲染出来时，并不会自动跳转到登录页

# TODO

# 问题

提交代码时，出现如下警告,：

```c
The file will have its original line endings in your working directory
```

windows中的换行符为 CRLF，而在Linux下的换行符为LF，所以在执行git add . 时，会出现warning。

这里我修改了警告（git config core.autocrlf false），特此记录，改回时，改为true就行

2024.1.31