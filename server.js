var express = require("express");
var app = express();

var server = app.listen(1337, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

var sensorList = [
    {
      id: "1",
      building: "1",
      floor: "5",
      temperature: "28",
      humidity: "50",
    },{
      id: "2",
      building: "1",
      floor: "2",
      temperature: "27",
      humidity: "53",
    }
];

app.get("/api/sensors/list", function(req, res, next){
    res.json(sensorList);
});