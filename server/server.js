const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;


//routes go here



app.use(express.static('server/public'));
app.use(bodyParser.json());


app.listen(port, function(){
    console.log('listening on port', port);  
});