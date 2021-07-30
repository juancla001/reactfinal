const express = require ('express');
const router = express.Router();
const conexion = require ('../connection');

router.get('/check', (req, res)=>{
    if (req.session.user){
        res.json({message:'ok', data: req.session.user});
    }else{ 
        res.json({message:'error'});
    }
 });
//Endpoint para iniciar sesion
router.post('/', (req, res)=>{
    console.log(req.body);

    const sql =`SELECT * FROM usuarios
                WHERE email = ?
                    AND password = ?`;
//autenticacion de usuario
conexion.query(sql,[req.body.email, req.body.password], (err, result)=> {
    if(err){
        console.log("Error al verificar usuario");
    }else{
        if(result.length === 1){
            console.log(result);
            const nombreUsuario = `${result[0].nombre} ${result[0].apellido}`
            req.session.usuario = {
                name: nombreUsuario,
                id: result[0].id,
            }; 
            console.log(req.session.usuario);

            res.status(200).json({message: 'Usuario valido', data: nombreUsuario});
        }else{
            res.status(401).json({message:'Usuario y/o Password incorrecto'});
        }
    }
    });
});

//COOKIES: archivos que viaja en la peticion serv/client



//endpoint cerrar sesion
router.delete('/', (req, res)=>{
    req.session.destroy((err)=>{
        if(err) {
            res.status(500).json({message:'error al cerrar la sesion'});
        }else{
            res.status(200).json({message:'sesion cerrada'});
        }
    });
});

module.exports = router;