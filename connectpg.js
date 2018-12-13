const pg = require('pg');

function connectPg() {
    return new Promise((resolve, reject) => {
        const pgConfig = {
            user: 'postgres',           // 数据库用户名
            database: 'postgres',       // 数据库
            password: 'postgres',       // 数据库密码
            host: '11.22.33.44',      // 数据库所在IP
            port: '5433'                // 连接端口
        };
        const pool = new pg.Pool(pgConfig);
        pool.connect(function (error, client, done) {
            if (error) {
                reject(error);
            }
            let sqlStr = 'SELECT * FROM test';
            client.query(sqlStr, [], function (err, response) {
                done();
                if (err) {
                    reject(err);
                } else {
                    resolve(response.rows);
                }
            })
        })
    })
}

module.exports = {
    connectPg
}