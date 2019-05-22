var express = require("express");
var mysql = require("mysql");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
// app.use(express.static("app/public"));

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "drivr"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.post("/api/addDay", function(req, res) {
  connection.query(
    "INSERT INTO days (dayWorked, moneyEarned, onlineHours, trips) VALUES (?, ?, ?, ?)",
    [req.body.date, req.body.moneyEarned, req.body.onlineHours, req.body.trips],
    function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        console.log("error", err);
        return res.status(500).end();
      }

      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

app.get("/api/overallStats", function(req, res) {
  connection.query("SELECT * FROM days", function(err, result) {
    console.log("error", err);
    console.log("Result", res.json);
    console.log("Result", result);
    return res.send(result);
  });
});

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);
// app.post("/api/addDay", (req, res, next) => {
//   console.log(req.body);
//   res.send("hi");
// });
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
