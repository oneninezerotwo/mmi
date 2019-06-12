// sql语句

var sqlMap = {

// 用户

user: {

add: 'insert into xmtest(id, name, qty,goods_id) values (0, ?, ?,?)' ,//插入新数据
ser:'select * from xmtest where name = ?', //查询用户数据
checkCurr:'select * from xmtest where name = ? and goods_id = ? ',
upd:'update xmtest set qty = ? where name = ? and goods_id = ?  ',//如果数据库已有这条数据,则只是更新

}

}

module.exports = sqlMap;