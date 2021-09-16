/*
 * @Author: proyzplus
 * @Date: 2021-09-16 19:58:52
 * @LastEditors: proyzplus
 * @LastEditTime: 2021-09-16 20:00:28
 * @Description: Description
 */
const mysql = require("mysql");

module.exports = {
  config: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'chat'
  },
  sqlConnect: function (sql, sqlArr, callBack) {
    var pool = mysql.createPool(this.config);
    pool.getConnection((err, conn) => { 
      if (err) {
        console.log("连接失败");
        return;
      }
      console.log("连接成功！");
      conn.query(sql, sqlArr, callBack);
      conn.release();
    });
  }
};