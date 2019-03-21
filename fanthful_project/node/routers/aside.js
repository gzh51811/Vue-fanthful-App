const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

Router.get('/', async(req, res) => {

    let aside = await db.find('aside', {});
    // let icon = await db.find('icon', { type });
    if (aside) {
        res.send({
            code: 1,
            msg: "侧边栏",
            data: {
                aside,
            }
        })
    } else {
        res.send({
            code: 0,
            msg: "查询侧边栏失败",
            data: {
                aside: [],
            }
        })
    }

});
module.exports = Router;