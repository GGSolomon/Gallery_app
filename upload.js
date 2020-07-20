const multer = require('multer');
const path = require('path');


// Set Storage engine
const storage = multer.diskStorage({
   destination: './public/images/',
   filename: function(req, file, cb){
       cb(null, file.field_name + '-' + Date.now() + path.extname(file.originalname));
   }
})

// Initialize upload
const upload = multer({
   storage: storage,
   limits: {fileSize: 1000000},
}).single('image');



module.exports = upload;