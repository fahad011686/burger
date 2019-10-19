var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { food: data });
  });
});

app.put("/api/burgers/:id", function(req, res) {
  connection.query(
    "UPDATE burgers SET devoured = ? WHERE id = ?",
    [req.body.quote, req.params.id],
    function(err, result) {
      if (err) {
        return res.status(500).end();
      }
    }
  );
});



app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
