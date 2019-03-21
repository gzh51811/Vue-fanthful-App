const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

Router.get('/', async(req, res) => {

    let type = req.query.type;
    let icon = await db.find('icon', { type });
    if (icon) {
        res.send({
            code: 1,
            msg: "icon",
            data: {
                icon,

            }
        })
    } else {
        res.send({
            code: 0,
            msg: "查询icon失败",
            data: {
                icon: [],
            }
        })
    }

});
module.exports = Router;