var express = require('express');
var app = express();

var PORT = process.env.PORT;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('Public'));

app.listen(PORT, function () {
    console.log('API is running on port ' + PORT);
});