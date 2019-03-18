const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

Router.get('/', async(req, res) => {
    let productId = req.query.productId;
    console.log(productId)
    let data = productId ? await db.find('goodlist', { productId: productId * 1 }) : await db.find('goodlist', {});

    if (data) {
        res.send({
            code: 1,
            msg: "商品列表",
            data
        })
    } else {
        res.send({
            code: 0,
            msg: "查询商品列表失败",
            data: []
        })
    }

});
module.exports = Router;