var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'smallsql' // 数据库名字
}); 
 
connection.connect();
 
var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var  addSqlParams = ['深圳华侨城', 'https://google.com','679', 'CN'];
//增
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();

// 查
