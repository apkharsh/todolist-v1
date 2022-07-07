const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use('view engine', 'ejs');

app.get('/', function(req, res) {
    // res.send('Hello World!');
    var today = new Date();
    if(today.getDay() === 4){
        res.send('Today is Thursday!');
    }
    else{
        res.send('Today is not Thursday!');
    }
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});