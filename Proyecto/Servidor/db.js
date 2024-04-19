const {pool} = require('../Servidor/connection')

async function getAllUser(){
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        //console.log("AQ]UIIIII",result)
        let jsonResult = result.rows.map(row =>{
            return {
                email: row.email,
                name: row.nombre,
                lastName: row.apellido,
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

async function getRol(idRol) {
    try {
        const result = await pool.query(`
        select u.id_rol, nombre_rol from usuarios u
        inner join roles r on (u.id_rol = r.id_rol)
        where r.id_rol = ${idRol}
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

async function validateUser(email,password){
    try {
        const result = await pool.query(`
            select * from usuarios where email = '${email}' and password = '${password}'
        `);
        //console.log("AQ]UIIIII",result)
        let jsonResult = result.rows.map(row =>{
            return {
                email: row.email,
                name: row.nombre,
                lastName: row.apellido,
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

async function createNewUser(args){
    try {
        const result = await pool.query(`
            insert into usuarios (email,nombre,apellido,password,id_rol)
            values
                ('${args.email}','${args.nombre}','${args.apellido}','${args.password}',2)
        `);
        //console.log("AQ]UIIIII",result)
        let jsonResult = result.rows.map(row =>{
            return {
                email: args.email,
                name: args.nombre,
                lastName: args.apellido,
                password: args.password,
                IdRol: 2
            }
        })
        return jsonResult;
    } catch (error) {
        console.error(error);
        return [];
    }
    
}

module.exports = { getAllUser,getRol,validateUser,createNewUser };