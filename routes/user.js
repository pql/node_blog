let express = require('express');
let router = express.Router();
// 用户登录
router.get('/signin', function(req, res){
    res.send('登录')
});
// 用户注册
router.get('/signup', function(req, res){
    res.send('注册')
});
// 用户退出
router.get('/signout', function(req, res){
    res.send('登出')
});

module.exports = router;