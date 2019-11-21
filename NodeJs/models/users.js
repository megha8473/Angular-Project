const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
var userSchema= mongoose.model('userSchema',{
    Name:{
        type:String,
        required:'Full name cannot be empty'
    },
    email:
    {
    type:String,
    required:'Email cannot be empty'
        
    },
    password:
    {
    type: String,
    required: 'Password cannot be empty',
    minlength : [4,'Password must be long']
    },

    saltSecret:String
});
userSchema.schema.path('email').validate((val)=>{
    emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailregex.test(val);
},'Invalid email');
userSchema.schema.pre('save', function(next){
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(this.password,salt, (err,hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});
module.exports={userSchema};