const express = require('express');
const connection = require('../connection');

const router = express.Router();

router.get('/', (req, res)=>{
    const sql = 'SELECT * FROM publicaciones';

    connection.query(sql, (err, result)=>{
        if(err) {
            console.log(err)
            res.send('error al obtener publicaciones')
        }else{
            res.json(result);
        }
    });
});

module.exports = router;