// Import express package
const express = require('express');
const mongoose = require('mongoose');

let indexRouter = require('./routes/index');

// Connecting to the Database
let mongodb_url = 'mongodb://localhost/';
let dbName = 'darkroom';
mongoose.connect(mongodb_url + dbName,)
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
   console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
   console.log(error);
})

// Initialize express
const app = express();

// Set up a view engine
app.set('view engine', 'ejs');


// Set a static folder
app.use(express.static('public'));

// Define the index router
app.use('/', indexRouter);


// Define the port number
const PORT = 5000;

app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
});