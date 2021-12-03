const express = require( 'express' );
const app = express();

const {DogModel} = require( './server/models/dog' );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );
app.use( express.urlencoded({extended:true}) );

const { DogRouter } = require("./server/routes/routerDog");

app.use('/dog', DogRouter);
require('./server/config/database');

app.listen(8080, function(){
    console.log("Running on 8080");
  });