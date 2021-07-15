const mysql = require('mysql2');

const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'paginaventas',
        port:'3307'
});

connection.connect( (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('conectado a la db');
    }
});


module.exports = connection;