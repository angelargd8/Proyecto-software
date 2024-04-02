const oracledb = require('oracledb');

const pool = oracledb.createPool({
    user: 'gerax',
    password: 'admin',
    connectString: 'localhost/xepdb1'
})

module.exports = pool