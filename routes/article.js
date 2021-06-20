let express = require('express');
let { checkLogin } = require('../auth');
let router = express.Router();
let { Article } = require('../model');

router.get('/add',checkLogin, function(req, res) {
    res.render('article/add', {
        title: '发表文章',
        article: {}
    });
});

router.post('/add', checkLogin, function(req,res){
    let article = req.body;
    article.user = req.session.user._id;
    Article.create(article, function(err, doc){
        if(err) {
            req.flash('error', err);
            res.redirect('back');
        } else {
            req.flash('success', '文章发表成功');
            res.redirect('/');
        }
    });
});

router.get('/detail/:_id', function(req, res){
    let _id = req.params._id;
    Article.findById(_id, function(err, article){
        if(err){
            req.flash('error', err);
            res.redirect('back');
        } else {
            res.render('article/detail', {
                title: '文章详情',
                article: article
            });
        }
    });
});

router.get('/delete/:_id', function(req, res){
    let _id = req.params._id;
    Article.remove({_id: _id}, function(err, result){
        if(err) {
            req.flash('error', err);
            res.redirect('back');
        } else {
            req.flash('success', '删除文章成功');
            res.redirect('/');
        }
    });
});

// 当点击编辑按钮的时候，会请求此路由
router.get('/update/:_id', function(req, res) {
    let _id = req.params._id;
    Article.findById(_id, function(err, article) {
        // 增加和更新可以复用一个模板
        res.render('article/add', {
            title: '更新文章',
            article: article
        })
    });
});

router.post('/update/:_id', function(req, res){
    let _id = req.params._id;
    Article.update({
        _id
    }, req.body, function(err, result) {
        if(err) {
            req.flash('error', err);
            res.redirect('back');
        } else {
            req.flash('success', "文章更新成功");
            res.redirect('/article/detail/'+_id);
        }
    });
});

module.exports = router;