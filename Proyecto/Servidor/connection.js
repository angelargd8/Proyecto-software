const {Pool} = require('pg')

const pool = new Pool({
    host:"localhost",
    user: "postgres",
    password:"Gerax@2003lm!",
    database:"ecomers",
    port:"5432"
})

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Error al conectar a la base de datos', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

module.exports = {pool}