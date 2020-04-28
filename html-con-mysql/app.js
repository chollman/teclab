// PROGRAMA EN NODE (JAVASCRIPT) PARA CONECTARSE A LA BASE DE DATOS MySQL

// EL CODIGO QUE VIENE ES LO QUE SERIA EL "BACKEND" DE NUESTRA PAGINA DONDE SE CONFIGURA LA BASE DE DATOS
// Y SE CREAN FUNCIONES JAVASCRIPT O METODOS, QUE ACOMODARAN LOS DATOS DE LA DB 
// PARA QUE NUESTRA PAGINA HTML (FRONTEND) PUEDA USARLOS 

// ======  Estos son los datos de conexion a la base de datos

// Puse mi usuario y contrasenia de la base de datos en un archivo aparte que no se sube a git porque esta en el gitignore
import { dbUser, dbPassword } from './config';

const mysql = require('mysql');

// Conectamos a la base de datos con nuestro usuario y contrasenia
const con = mysql.createConnection({
    host: 'localhost',
    user: dbUser,
    password: dbPassword,
    database: 'teclab'
});

con.connect((err) => {
    if(err){
        console.log('Error conectando a la Base de Datos');
        return;
    }
    console.log('Conexion establecida');
});

// Pruebo la base de datos haciendo un select de los usuarios
// con.query('SELECT * FROM users', (err,rows) => {
//     if(err) throw err;
  
//     console.log('Recibo los datos de la DB:');
//     console.log(rows);
// });

const getUsuarios = () => {
    let result = [];
    con.query('SELECT * FROM users', (err,rows) => {
        if(err) throw err;
      
        // console.log('Recibo los datos de la DB:');
        // console.log(rows);
        result = rows;
    });
    console.log(result);
    return result;
};

console.log(getUsuarios());

//export getUsuarios = getUsuarios;
  
con.end((err) => {
    //Terminamos la conexion
});
