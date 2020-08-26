var mysql = require("mysql");


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  // database: "mydb",
  // multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("connected");
  // con.query("SELECT * FROM mydb.documents", function (err, result, fields) {
  //   if (err) throw err;s 
  //   console.log(result);
  // })
});

module.exports= con; 
