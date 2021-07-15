const express = require('express');
const cors = require('cors')  //con cors puedo hacer usode diferentes host ej el 3000 y 8000

const usuariosRoutes = require('./routes/usuarios_routes');
const publicacionesRoutes = require('./routes/publicaciones_routes');

const app = express();

app.use(cors());   //para darle permiso solo a un puerto especifico debo escribir por ej= {origin:'htpp://localhost:3000'}

app.use(express.static('public'));


app.use(express.json());  //activa para interceptar y parcear lo que le llega 

app.use('/usuarios', usuariosRoutes);

app.use('/publicaciones', publicacionesRoutes);

//conectar servidor al puerto 8000
app.listen(8000, ()=>{
    console.log('Servidor conectado');
});
//ARMADO DE RUTAS