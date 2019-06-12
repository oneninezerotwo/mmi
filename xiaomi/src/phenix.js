const express = require('express');
const mysql = require('mysql');
const app = express();

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    port:8889,
    database:'goodslist',
    multipleStatements:true
});


app.get('/check',(req,res)=>{
    
    pool.query('select * from tbdata',(error,rows)=>{
        if(error) throw error;
        res.send(rows)
    })

    
})





// app.get('/createdb',(req,res)=>{
//     let sql = 'CREATE DATABASE my_db';
//     db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...')
//     })
// })

// db.connect((err)=>{
//     if(err) throw err;
//     console.log('Mysql Connected...')
// })




app.listen(8889,()=>{
    console.log('The server is running on 8889')
})
