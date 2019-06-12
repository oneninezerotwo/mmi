const express = require('express');
const mysql = require('mysql');
const app = express();


module.exports = {

    mysql: {
    
    host: 'localhost',
    
    user: 'root',
    
    password: 'root',
    
    database: 'goodslist',
    
    port: 8889,

    multipleStatements: true
    
    }
    
    }