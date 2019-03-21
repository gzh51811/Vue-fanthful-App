const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

Router.get('/', async(req, res) => {

    let hotgamelist = await db.find('hotgamelist', {});
    let hotmovielist = await db.find('hotmovielist', {});
    let hottvlist = await db.find('hottvlist', {});
    if (hotgamelist && hotmovielist && hottvlist) {
        res.send({
            code: 1,
            msg: "热门游戏，电影，电视信息",
            data: {
                hotgamelist,
                hotmovielist,
                hottvlist
            }
        })
    } else {
        res.send({
            code: 0,
            msg: "查询热门游戏，电影，电视信息失败",
            data: {
                hotgamelist: [],
                hotmovielist: [],
                hottvlist: []
            }
        })
    }

});
module.exports = Router;