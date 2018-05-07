var express = require('express');
var app = express();

var PORT = process.env.PORT;

app.use(express.static('Public'));

app.listen(PORT, function () {
    console.log('API is running on port ' + PORT);
});