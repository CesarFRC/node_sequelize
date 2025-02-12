//declaramos las variables para la conexion
const {Sequelize} = require("sequelize");
const fs = require('fs');
const path = require("path");

const configPath = path.join(__dirname,'config.json');

const rawConfig = fs.readFileSync(configPath, 'utf8');

const config = JSON.parse(rawConfig).database;

const sequelize = new Sequelize (
    config.db,
    config.user,
    config.password,{
        host: config.host,
        port: config.port,
        dialect: config.type,
        logging: false
    }
);


sequelize.authenticate()
.then(() => console.log('Conexion establecida'))
.catch(err => console.error("Sin conexion", err));

module.exports = sequelize;