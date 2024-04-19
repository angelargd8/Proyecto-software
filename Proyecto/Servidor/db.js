const {pool} = require('../Servidor/connection')

async function getAllUser(){
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        //console.log("AQ]UIIIII",result)
        let jsonResult = result.rows.map(row =>{
            return {
                ID: row.id_usuario,
                name: row.nombre,
                password: row.password,
                IdRol: row.id_rol
            }
        })
        return jsonResult;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getRol(id_user) {
    try {
        const result = await pool.query(`
        select u.id_rol, nombre_rol from usuarios u
        inner join roles r on (u.id_rol = r.id_rol)
        where id_usuario = ${id_user}
        `);
        //console.log("AQ]UIIIII",result)
        let jsonResult = result.rows.map(row =>{
            return {
                ID: row.id_rol,
                name: row.nombre_rol,
            }
        })
        return jsonResult;
    } catch (error) {
        console.error(error);
        return [];
    }
}

module.exports = { getAllUser,getRol };