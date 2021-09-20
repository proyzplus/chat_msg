const db = require("../util/dbconfig");


// 获取用户列表
getUserList = (req, res) => {
  let { user, pass } = req.query;
  var sql = "select * from user where user=? and pass=?";
  var sqlArr = [user, pass];
  var callBack = (err, data) => {
    if (err) {
      res.send({
        'ec': 500,
        'em': '连接出错'
      });
    } else {
      if (data[0]) {
        res.send({
          'ec': 200,
          'body': data[0],
          'em': ''
        });
      } else {
        res.send({
          'ec': 201,
          'em': '错误'
        });
      }
    }
  };
  db.sqlConnect(sql, sqlArr, callBack);
};

module.exports = {
  getUserList
};