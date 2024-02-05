

var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.text({ type: '*/*' }));

app.post('/', function(req, res) {
    var body = req.body;    // getting body

    // if accept is not empty, set the response accept to it
    if (req.get('Content-Type') != '') {
        res = res.type(req.get('Content-Type'));
    }
    res.send(body);

});

app.listen(process.env.PORT || 8008, function() {
    console.log('listening on port %d', this.address().port);
});

module.exports = app; // for testing