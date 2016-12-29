var express = require('express');
var port = process.env.PORT || 1337;
var app = express();

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
 
app.get('/api/sensors/list', function (req, res) {
  res.json(sensorList);
});
 
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});