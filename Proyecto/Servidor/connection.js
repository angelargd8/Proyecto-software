const {Pool} = require('pg')

const password1 = "Gerax@2003lm!"
const password2 = ""
const password3 = ""
const password4 = ""

const pool = new Pool({
    host:"localhost",
    user: "postgres",
    password:password1,
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