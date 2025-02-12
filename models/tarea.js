
const {DataTypes} = require('sequelize');
//Aqui varia donde tenemos la carpeta 
const sequelize = require("../databases/conexion");


const Tarea = sequelize.define('tarea', {
//definimos los campos de la tabla que vamos a conectar  

id: {
    //Aqui mismo tambien podemos poner restrinciones
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  // Esto hace que el id sea autoincremental

},
titulo: {
    type: DataTypes.STRING
},
descripcion:{
    type: DataTypes.TEXT
},
completado:{
    type: DataTypes.STRING
}
});

//Para exportar al servidor y usarlo
module.exports = Tarea;