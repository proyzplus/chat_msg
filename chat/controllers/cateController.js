const db = require("../util/dbconfig");


// 获取用户列表
getUserList = (req, res) => {
  console.log(req.params, "req")
  var sql = "select * from user";
  var sqpArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log("连接出错");
    } else {
      res.send({
        'list': data
      });
    }
  };
  db.sqlConnect(sql, sqpArr, callBack);
};

module.exports = {
  getUserList
};