var express = require('express');
var app = express();
let pool = require('./pool.js')

const bodyParse = require("body-parser")

let upload = require('./upload') 

app.use(express.static(__dirname +'/img'))

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "authorization,content-type,contentType");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

let data = {
	aq:1,
	cc:2
}

app.use(bodyParse.json({limit: '50mb'}));
app.use(bodyParse.urlencoded({limit: '50mb', extended: true}));

app.get('/aaa', function (req, res) {
	let sql = 'SELECT * from menus'
	pool.query(sql,[],(err,data)=>{
		 res.send({code: 200, data,status: 'success'});
	})
});

app.get('/test', function (req, res) {
	let sql = 'SELECT * from test'
	pool.query(sql,[],(err,data)=>{
		 res.send({code: 200, data,status: 'success'});
	})
});

app.get('/bbb', function (req, res) {
	res.send({code: 200, data,status: 'success'});
});

app.get('/default', function (req, res) {
	res.sendFile(__dirname + '/yu.html')
});

app.post('/login', function (req, res) {
	let cqh = req.body
	console.log(cqh)
	let sql = 'SELECT * from user WHERE username=? && password = ?'
	console.log(sql)
	// let userMsg = 'INSERT INTO user(Id,username,password,logourl) VALUES(NULL,?,?,?)';
	// let userMsg = 'UPDATE user SET logourl=? WHERE id = ?'
	let getUser = ['http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',1]

	pool.query(sql,[cqh.uid, cqh.password],(err,result)=>{
		console.log(result)
		if (result.length > 0)
			res.send({code:200, data:result, status:'success'})
		else
			res.send({code: -999, data: null, msg: 'error'})
	})
});
app.post('/register', function (req, res) {
	let cqh = req.body

	let userMsg = 'INSERT INTO user(Id,username,password,logourl) VALUES(NULL,?,?,?)';

	// let userMsg = 'UPDATE user SET logourl=? WHERE id = ?'
	let getUser = [cqh.uid, cqh.password, 'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg']

	pool.query(userMsg, getUser, (err,result)=>{
		console.log(result)
		if (result.affectedRows > 0)
			res.send({code:200, data:getUser, status:'success'})
		else
			res.send({code: -999, data: null, msg: 'error'})
	})
});

app.use('/upload', upload)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});