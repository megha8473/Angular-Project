const express=require('express');
var router=express.Router();
var { userSchema }=require('../models/users');

router.post('/',(req,res,next)=>{
    var user=new userSchema({
        Name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        //salary:req.body.salary,
    });
    user.save((err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log(err);}
    });
});
module.exports=router;