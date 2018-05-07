var express = require('express');
var app = express();

var PORT = process.env.PORT || '3003';

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('Public'));

app.listen(PORT, function () {
    console.log('API is running on port ' + PORT);
});