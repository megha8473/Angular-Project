const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudDb',{ useNewUrlParser: true,useUnifiedTopology: true, },(err) => {
    if(!err)
    console.log('Mongodb succeed.');

});
module.exports= mongoose;