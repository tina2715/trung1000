var express = require("express");
var app = express();
app.use(express.static("public")); //all request user send save in folder public
//we set view engine is ejs
app.set("view engine", "ejs");
// All interface are in folder views
app.set("views","./views");
//we open the port for the client to call the server
app.listen(3000);
app.get("/", function(req, res){
    res.render("trangchu");
});