const express = require('express');
const cors = require('cors')  //con cors puedo hacer usode diferentes host ej el 3000 y 8000
const session = require('express-session');


const usuariosRoutes = require('./routes/usuarios_routes');
const publicacionesRoutes = require('./routes/publicaciones_routes');
const authRoutes = require('./routes/auth_routes');

const app = express();

app.use(cors({credentials: true,  origin: 'http://localhost:3000'}));   //para darle permiso solo a un puerto especifico debo escribir por ej= {origin:'htpp://localhost:3000'}, para manejar las cookies debo acgregar credentials

app.use(session({
    secret: 'qwertyu!!!!@',
    resave: false,
    saveUninitialized: true,
    })
);

app.use(express.static('public'));


app.use(express.json());  //activa para interceptar y parcear lo que le llega 

app.use('/usuarios', usuariosRoutes);

app.use('/publicaciones', publicacionesRoutes);

app.use('/auth', authRoutes);

//conectar servidor al puerto 8000
app.listen(8000, ()=>{
    console.log('Servidor conectado');
});
//ARMADO DE RUTAS