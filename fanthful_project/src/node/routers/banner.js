const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

Router.get('/', async(req, res) => {

    let data = await db.find('banner', {});
    let data2 = await db.find('banner2', {});
    let data3 = await db.find('banner3', {});
    if (data && data2 && data3) {
        res.send({
            code: 1,
            msg: "轮播图信息",
            data: {
                banner1: data,
                banner2: data2,
                banner3: data3
            }
        })
    } else {
        res.send({
            code: 0,
            msg: "查询轮播图失败",
            data: {
                banner1: [],
                banner2: [],
                banner3: []
            }
        })
    }

});
module.exports = Router;