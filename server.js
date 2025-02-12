//IMPORTAMOS LO QUE USAMOS EXPRESS
const express = require('express');
//IMPORTAMOS LO QUE USAMOS CONEXION A LA BASE DE DATOS  
const sequelize = require('./databases/conexion');
//IMPORTAMOS LO QUE USAMOS MODELO DE LA BASE DE DATOS 
const Tarea = require('./models/tarea')
//IMPORTAMOS LO QUE USAMOS ROUTER QUE CREAMOS QUE ES DE CREAR
const tarearouter = require('./routers/tarearouter')
//HABILITAR PUERTO Y CONEXION A EXPRESS
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send("Servidor iniciado :D");
});
//AQUI

//UN CATCH PARA SABER SI SE SINCRONIZA LA BASE DE DATOS
sequelize.sync({force:false})
.then(() => console.log ("Modelos Sincronisados"))
.catch(err => console.log("Error al conectar los modulos" ,err));
//AQUI TERMINA 


//USO DE EL ROUTER
app.use(express.json());
app.use('/tarea' , tarearouter);
//ACABA AQUI

//Levantamos el server :D para insomnia 
app.listen(port, () =>{
    console.log('Servidor Coriendo en http://localhost:${PORT}');
});

