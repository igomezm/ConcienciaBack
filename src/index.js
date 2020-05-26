const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

//configuracion de servidor 
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); 

//middlewares

//importacion de rutas
app.use(require('./routes/'));

//activacion de la base de datos
const conn = require(path.join(__dirname, 'server/bdconnection/index'))


//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))
 

//escuchando el servidor en el puerto 4000 
app.listen(app.get('port'), () => {
console.log('servidor funcionando en el puerto:', app.get('port'));
});