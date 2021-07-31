const express = require('express');
const connection = require('../connection');

const router = express.Router();

router.get('/', (req, res) =>{
    const sql = 'SELECT * FROM categoria';
    connection.query(sql, (err, result)=>{
        if(err){
            res.send('error al obtener categorias')
        }else{
            res.json(result);
        }
    });
});

module.exports = router;