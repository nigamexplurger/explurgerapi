var express = require("express");
var app = express();
var port = process.env.PORT ||3004;

require("./routes")(app);

//require("./app")(app);

var api = require('./api/api');

//var users = require('./routes/users');

app.use("/api", api);
//app.use("/users", users);
app.listen(port, ()=>{
	console.log(`Server is running under http://localhost:${port}`);
	});

