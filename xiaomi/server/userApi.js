var models = require('./db.js');

var express = require('express');

var router = express.Router();

var mysql = require('mysql');

var $sql = require('./sqlMap.js');

// 连接数据库

var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function(res, ret) {

if(typeof ret === 'undefined') {

res.json({

code: '1',

msg: '操作失败'

});
console.log('fail')

} else {

res.json(ret);
console.log('ok')

}

};

// 增加用户接口

router.post('/addUser', (req, res) => {

var sql = $sql.user.add;

var params = req.body;

console.log(params);

conn.query(sql, [params.username, params.quantity,params.goodsId], function(err, result) {

if (err) {

console.log(err);

}

if (result) {

jsonWrite(res, result);

}

})

});
// 查询数据

router.post('/ser', (req, res) => {

    var sql = $sql.user.ser;

    var params = req.body;

    console.log(params);

    conn.query(sql, [params.username], function(err, result) {

    if (err) {

    console.log(err);

    }

    if (result) {
    console.log(result)
    jsonWrite(res, result);

    }

    })

    });
    // 查询此用户购物车有无这条商品
    router.post('/checkCurr', (req, res) => {

        var sql = $sql.user.checkCurr;
    
        var params = req.body;
    
        console.log(params);
    
        conn.query(sql, [params.username,params.goodsId], function(err, result) {
    
        if (err) {
    
        console.log(err);
    
        }
    
        if (result) {
        console.log(result)
        jsonWrite(res, result);
    
        }
    
        })
    
        });
// 更新当前商品数量
        router.post('/upd', (req, res) => {

            var sql = $sql.user.upd;
        
            var params = req.body;
        
            console.log(params);
        
            conn.query(sql, [params.quantity,params.username,params.goodsId], function(err, result) {
        
            if (err) {
        
            console.log(err);
        
            }
        
            if (result) {
            console.log(result)
            jsonWrite(res, result);
        
            }
        
            })
        
            });

module.exports = router;