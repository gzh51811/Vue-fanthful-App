# 后端接口：10086
# 数据库名：vueProject

## 关于首页轮播图的接口
    请求类型：get
    请求地址：/banner
    成功的返回：
    {
        code:1,
        msg:"轮播图信息"
        data:{
            banner1:[..,..],
            banner2:[..,..],
            banner3:[..,..]
        }

    }
    失败的返回：
    {
        code:0,
        msg:"查询轮播图失败",
        data:{
            banner1:[],
            banner2:[],
            banner3:[]
        }
    }


## 关于首页热门信息的接口
    请求类型：get
    请求地址：/hotmsg
    成功的返回：
    {
        code:1,
        msg:"热门游戏，电影，电视信息"
        data:{
            hotgamelist:[..,..],
            hotmovielist:[..,..],
            hottvlist:[..,..]
        }

    }
    失败的返回：
    {
        code:0,
        msg:"查询热门游戏，电影，电视信息失败",
        data:{
            hotgamelist: [],
            hotmovielist: [],
            hottvlist: []
        }
    }


## 关于首页商品信息的接口
    请求类型：get
    请求地址：/goodlist
    参数：不传参(返回所有商品信息)，传参productId=xxxx(返回单个商品信息)
    成功的返回：
    {
        code:1,
        msg:"商品信息"
        data:[...,...]

    }
    失败的返回：
    {
        code:0,
        msg:"查询商品信息失败",
        data:[]
    }



## 关于侧边栏及对应的商品logo的接口
    请求类型：get
    请求地址：/asideandicon
    参数：type=Game/Film/.....(当前侧边栏高亮的类型)
    成功的返回：
    {
        code:1,
        msg:"侧边栏及对应的商品logo"
        data:{
            aside:[...,...]
            icon:[...,...]
        }
    }
    失败的返回：
    {
        code:0,
        msg:"查询侧边栏及对应的商品logo失败",
        data:{
            aside:[]
            icon:[]
        }
    }