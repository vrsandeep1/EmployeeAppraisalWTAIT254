const express = require('express');
var router = express.Router();
var {Employee} = require('../models/employee');
var ObjectId = require('mongoose').Types.ObjectId;
const jwtHelper = require('../config/jwtHepler');

//localhost:3000/employees/
router.get('/',jwtHelper.verifyJwtToken,(req,res)=>{
	Employee.find((err,docs)=>{
		if(!err)
		{
			res.send(docs);
		}
		else
		{
			console.log('Error');
		}
	});
});

router.get('/:id',jwtHelper.verifyJwtToken,(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
	{
		return res.status(400).send('No record with given id');
	}
	Employee.findById(req.params.id,(err,doc)=>{
		if(!err)
		{
			res.send(doc);
		}
	});
});



router.post('/',jwtHelper.verifyJwtToken,(req,res)=>{
	var emp = new Employee(
	{
		name : req.body.name,
		position : req.body.position,
		office : req.body.office,
		salary : req.body.salary,
		rating1 : req.body.rating1,
		rating2 : req.body.rating2,
		rating3 : req.body.rating3,
		rating4 : req.body.rating4,
		rating5 : req.body.rating5,
		rating6 : req.body.rating6,
		rating7 : req.body.rating7,
		overallrating : req.body.overallrating
	});
	emp.save((err,doc)=>{
		if(!err)
		{
			res.send(doc);
		}
		else
		{
			console.log("Error");
		}
	});
});

router.put('/:id',jwtHelper.verifyJwtToken,(req,res)=>
{
	if(!ObjectId.isValid(req.params.id))
	{
		return res.status(400).send('No record with given id');
	}
	var emp = 
	{
		name : req.body.name,
		position : req.body.position,
		office : req.body.office,
		salary : req.body.salary,
		rating1 : req.body.rating1,
		rating2 : req.body.rating2,
		rating3 : req.body.rating3,
		rating4 : req.body.rating4,
		rating5 : req.body.rating5,
		rating6 : req.body.rating6,
		rating7 : req.body.rating7,
		overallrating : req.body.overallrating
	};

	Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
		if(!err)
		{
			res.send(doc);
		}
	});
});

router.delete('/:id',jwtHelper.verifyJwtToken,(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
	{
		return res.status(400).send('No record with given id');
	}
	Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
		if(!err)
		{
			res.send(doc);
		}
	});
})


module.exports = router;