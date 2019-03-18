const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

Router.get('/', async(req, res) => {
    let type = req.query.type;
    let aside = await db.find('aside', {});
    let icon = await db.find('icon', { type });
    if (aside && icon) {
        res.send({
            code: 1,
            msg: "侧边栏及对应的商品logo",
            data: {
                aside,
                icon,
            }
        })
    } else {
        res.send({
            code: 0,
            msg: "查询侧边栏及对应的商品logo失败",
            data: {
                aside: [],
                icon: []
            }
        })
    }

});
module.exports = Router;