// Set up MySQL connection.
var mysql = require("mysql");

var dbURL = 'mysql://bfd81f9d05e7b9:7966e4a9@us-cdbr-east-06.cleardb.net/heroku_e45707c9351e030?reconnect=true'

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306 || process.env.PORT,
//   user: "root",
//   password: "omgwtfbbq",
//   database: "burgers_db"
// });


var connection;
if (process.env.dbURL) {
    connection = mysql.createConnection(process.env.dbURL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'omgwtfbbq',
        database: 'burgers_db'
    })
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
