// node 后端服务器

const userApi = require('./userApi');

const fs = require('fs');

const path = require('path');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

const {PORT} =require('./config.json');

app.use(express.static('./'));
// 后端api路由

app.use('/api/user', userApi);

// 监听端口

app.listen(PORT);

console.log('success listen at port '+ PORT);

// 记得每次修改了都要启动一下,或使用supervisor