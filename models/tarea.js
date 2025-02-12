
const {DataTypes} = require('sequelize');
//Aqui varia donde tenemos la carpeta 
const sequelize = require("../databases/conexion");


const Tarea = sequelize.define('tarea', {
//definimos los campos de la tabla que vamos a conectar  

id: {
    type: DataTypes.INTEGER,
    primaryKey: true
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

