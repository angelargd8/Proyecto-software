const {Pool} = require('pg')
require('dotenv').config()

const password1 = "Gerax@2003lm!"
const password2 = "123456"
const password3 = "francis123"
const password4 = "Basedatos1"

const pool = new Pool({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
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