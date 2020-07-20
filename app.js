// Import express framework
const express = require('express');

// Initialize express
const app = express();

// Set up a view engine
app.set('view engine', 'ejs');

// Set a static folder
app.use(express.static('public'));

app.get('/', (req,res)=>{
   res.render('index');
})

// Define the port number
const PORT = 5001;


app.listen(PORT, function(){
   console.log(`Server is listening on port ${PORT}`)
})