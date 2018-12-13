const express = require('express');
const {connectPg} = require('./connectpg');

const app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 接口
app.get('/test', function (req, res) {
    connectPg().then(response => {
        res.json(response);
    })
})


app.listen(8081, function () {
    console.log(`接口已运行`)
})