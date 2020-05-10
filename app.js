var express=require("express"); 
var bodyParser=require("body-parser"); 
const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/'); 

var db=mongoose.connection; 

db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express(); 


app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

app.post('/contact_us', function(req,res){ 
    var name = req.body.name; 
    var number =req.body.number; 
	var email =req.body.email; 
	

	var data = { 
        "name": name, 
        "number":number, 
		"email":email,  
		
	} 
db.collection('details').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
			
	}); 
		
//	return res.redirect('#'); 
}).listen(3000);  


// app.get('/',function(req,res){ 
// res.set({ 
// 	'Access-control-Allow-Origin': '*'
// 	}); 
// return res.redirect('index.html'); 
// })


console.log("server listening at port 3000"); 
