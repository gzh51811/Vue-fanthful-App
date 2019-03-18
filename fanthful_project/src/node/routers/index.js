const express = require('express');
const Router = express.Router();

// 引入分支路由
const bannerRouter = require('./banner');

const hotmsgRouter = require('./hotmsg');

const goodlistRouter = require('./goodlist')

const asideandiconRouter = require('./asideandicon')


//允许跨域
Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.send(200); /*让options请求快速返回*/
    } else {
        next();
    }
});



//关于首页商品的路由
Router.use("/banner", bannerRouter);

//关于首页热门商品信息的路由
Router.use("/hotmsg", hotmsgRouter);

//关于首页商品列表的路由
Router.use("/goodlist", goodlistRouter);

//关于首侧边栏和对应logo的路由
Router.use("/asideandicon", asideandiconRouter);





module.exports = Router;