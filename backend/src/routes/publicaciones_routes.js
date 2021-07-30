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

router.get('/userpubs', (req, res)=>{
    console.log(req.session.user.id);

    const sql = `SELECT * 
                FROM publicaciones
                WHERE usr_id = ?`;
    connection.query(sql, [req.session.user.id], (err, result)=>{
        if(err){
            res.send('error al obtener las pubs')
        }else{
            res.json(result);
        }
    });

});

router.get('/:id', (req, res)=>{        
    const sql = 'SELECT * FROM publicaciones WHERE id= ?';

    connection.query(sql, [req.params.id], (err, result)=>{
        if(err) {
            console.log(err)
            res.send('error al obtener la publicacion')
        }else{
            res.json(result);
            }
        });
});



module.exports = router;