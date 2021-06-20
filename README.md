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