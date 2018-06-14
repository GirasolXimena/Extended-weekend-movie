const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;


//routes go here
// const add = require('./routes/add.route');
const movie = require('./routes/movie.route')


app.use(express.static('server/public'));
app.use(bodyParser.json());
// app.use('/add', add);
app.use('/movie', movie);


app.listen(port, function(){
    console.log('listening on port', port);  
});