// Set up MySQL connection.
var mysql = require("mysql");


// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306 || process.env.PORT,
//   user: "root",
//   password: "omgwtfbbq",
//   database: "burgers_db"
// });


var connection;
if (process.env.JAWSDW_URL) {
    connection = mysql.createConnection(process.env.JAWSDW_URL);
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
