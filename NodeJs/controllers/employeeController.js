const express=require('express');
var router=express.Router();
var { Employee }=require('../models/employee');
var obj=require('mongoose').Types.ObjectId;
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){res.send(docs); }
        else{console.log('Error in retriving employees');}
    });
});


router.get('/:id',(req,res)=>{
    if(!obj.isValid(req.params.id))
    return res.status(400).send('No record Found');
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving employee');}
    });
});
router.post('/',(req,res)=>{
    var emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
    });
    emp.save((err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in employee save');}
    });
});
router.put('/:id',(req,res)=>{
    if(!obj.isValid(req.params.id))
    return res.status(400).send('No record Found');
    var emp={
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in employee update');}
    });
});   
router.delete('/:id',(req,res)=>{
    if(!obj.isValid(req.params.id))
    return res.status(400).send('No record Found');

    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in employee update');}
    });
});      
   
module.exports=router;