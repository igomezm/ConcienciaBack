const mysql = require('mysql');

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "Semilleros"
 });
 
 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   var sql = "INSERT into Usuario (Nombre_Usuario, Apellido_Usuario, Telefono_Usuario,Rol_Usuario,Email_Usuario,Cedula_Usuario,Contrasena_Usuario) VALUES ('mbjkkteo', 'astroz', '1263', 'dwdq', 'dafur802@gmail.com', '02106', 'oswsq')";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Usuario creado correctamente");
   });
 });


 module.exports = {
    "con": con
 }