# 新建一个项目
```
npm init -y
```
# 安装依赖的模块
```
npm install npm install body-parser cookie-parser debug ejs express morgan serve-favicon express-session connect-mongo mongoose connect-flash multer async bootstrap jquery-S
```
- --save = -S
- --save-dev = -D

# 创建并初始化git
```
git init
git add -A
git commit -m "1.初始化项目和依赖的模块"
git remote add origin https://github.com/pql/node_blog.git 
git push -u origin master
```

# 创建服务
- express + mongoose
```js
let express = require('express');
let app = express();
app.listen(8080);
```

# 跑通路由

# 引入模板引擎

# 编写步骤
1. 初始化项目和依赖的模块
2. 跑通路由
3. 使用botstrap渲染模板
4. 实现用户注册的功能
5. 实现用户的登录功能
6. 实现会话功能并控制菜单显示
7. 增加登录状态判断中间件
8. 成功和失败时的消息提示
9. 发表文章
10. 查看文章详情
11. 删除文章
12. 修改文章
13. 搜索文章和分页