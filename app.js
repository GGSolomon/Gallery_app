// Import express package
const express = require('express');
const upload = require('./upload');

// Initialize express
const app = express();

// Set up a view engine
app.set('view engine', 'ejs');

// Set a static folder
app.use(express.static('public'));

app.get('/', (req,res)=>{
   res.render('index');
})

// route to handle image upload
app.post('/upload', (req,res)=>{
   upload(req, res, (err)=>{
       if (err){
           console.log(err)
           res.render('index', {msg: err})
       }else{
           res.render('index', {file: 'images/' + req.file.filename})
       }
   })
})


// Define the port number
const PORT = 5001;


app.listen(PORT, function(){
   console.log(`Server is listening on port ${PORT}`)
})