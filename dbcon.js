
mysql = require('mysql');

var pool = mysql.createPool({
  host  : 'classmysql.engr.oregonstate.edu',
  user  : 'cs290_harbers',
  password: '314159Ss',
  database: 'cs290_harbers'
});
console.log("Connected to MySql");
module.exports.pool = pool;
