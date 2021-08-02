const express = require('express');
const connection = require('../connection');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res)=>{        
    const sql = `SELECT * FROM publicaciones`;

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
    const sql = `SELECT * FROM publicaciones WHERE id = ?`;

    connection.query(sql, [req.params.id], (err, result)=>{
        if(err) {
            console.log(err)
            res.send('error al obtener la publicacion')
        }else{
            res.json(result[0]);
            }
        });
});

router.post('/', (req,res) =>{
    let imageFileName = '';

    if (req.files){
        const pubImage = req.files.pubImage;
//tomar la fecha del archivo
        imageFileName = Date.now() + path.extname(pubImage.name);
        console.log(imageFileName);
//mover a una carpeta especifica
        pubImage.mv(`./public/images/${imageFileName}`, (err)=>{
            if(err){
                console.log(err);
            }
        });
    }

    const sql = `INSERT INTO publicaciones(titulo, precio, imagen, cat_id)
            VALUES(?, ?, ?, ?)`;
    const values = [
        req.body.pubTitulo,
        req.body.pubPrice,
        imageFileName,
        req.body.pubCategory,
    ];

    connection.query(sql, values, (err, result)=> {
        if (err){
            console.log(err);
            res.json({
                status: 'error',
                message: 'error al realizar la publicacion'
            });
        }else{
            res.json({
                status:'ok',
                message: 'Publicacion cargada',
            });
        }
    });
});


module.exports = router;