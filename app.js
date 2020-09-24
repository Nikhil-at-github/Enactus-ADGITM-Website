var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

var app = express();


app.use(bodyParser.json());
app.use(express.static('.'));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.set('view engine', 'html');

//home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//astitva page
app.get('/project-astitva', (req, res) => {
    res.sendFile(path.join(__dirname + '/Astitva/index.html'));
});

app.get('*', (req,res)=>{
	res.redirect('/');
})

const PORT = 3001;

app.listen(PORT, ()=>{
	console.log(`server is now running on port ${PORT}`)
})
