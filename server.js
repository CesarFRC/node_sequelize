const express = require('express');
const sequelize = require('./databases/conexion');
const Tarea = require('./models/tarea')
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send("Servidor iniciado :D");
});


//Levantamos el server :D para insomnia 
app.listen(port, () =>{
    console.log('Servidor Coriendo en http://localhost:${PORT}');
});