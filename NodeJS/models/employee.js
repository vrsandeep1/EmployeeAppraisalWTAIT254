const mongoose = require('mongoose')

var Employee = mongoose.model('Employee',{
	name : {type:String},
	position : {type:String},
	office : {type:String},
	salary : {type:Number},
	rating1 : {type:Number},
	rating2 : {type:Number},
	rating3 : {type:Number},
	rating4 : {type:Number},
	rating5 : {type:Number},
	rating6 : {type:Number},
	rating7 : {type:Number},
	overallrating : {type:Number}
});


module.exports = {
	Employee 
};