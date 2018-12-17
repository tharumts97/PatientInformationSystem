var express =require('express');
var app=express();
var mysql=require('mysql');
var bodyParser=require('body-parser');
app.use(bodyParser.json({type:'application/json'}));
//support URL-encode body;
app.use(bodyParser.urlencoded({extended:true}));

var con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tritech'
});

var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("server start");
});

con.connect(function(error){
    if(!!error)console.log('error');
    else console.log('connected');
});

app.get('/patient',function(req,res){
    con.query('SELECT * FROM patient',function(error, rows, fields){
        if(!!error)console.log('error');
        else{
           console.log(rows);
           res.send(rows); 
        }

    });
});

app.post('/patient',function(req,res){
    con.query('INSERT INTO patient SET ?',req.body,function(error, rows, fields){
        if(!!error)console.log('error');
        else{
           console.log(rows);
           res.send(JSON.stringify(rows)); 
        }
    })
})

app.get('/patient',function(req,res){
    con.query('SELECT LAST_INSERT_ID(pID) FROM patient',function(error, rows, fields){
        if(!!error)console.log('error');
        else{
           console.log(rows);
           res.send(JSON.stringify(rows)); 
        }
    })
})

