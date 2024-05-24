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
        let jsonResult ={
            email: args.email,
            name: args.nombre,
            lastName: args.apellido,
            password: args.password,
            IdRol: 2
        }
        return jsonResult;
    } catch (error) {
        console.error(error);
        return [];
    }
    
}


async function getAllItems(){
    const result = await pool.query('SELECT * FROM articulos')
    let jsonResult = result.rows.map(row =>{
        return {
            idItems: row.id_articulo,
            name: row.nombre_articulo,
            quantity: row.cantidad_articulo,
            price: row.precio,
            description: row.descripcion
        }
    })
    return jsonResult
}

async function deleteUser(email){
    const result = await pool.query(`DELETE FROM usuarios WHERE email = '${email}'`);
    return result
}

async function getPage(idPage){
    const result = await pool.query(`SELECT * FROM paginas WHERE id_pagina = ${idPage}`)
    let jsonResult = result.rows.map(row =>{
        return {
            idPage: row.id_pagina,
            name: row.nombre_pagina,
            emailAdmin: row.email
        }
    })
    return jsonResult
}




async function getPromotions(idItems){
    const result = await pool.query(`select p.id_promocion,p.porcentaje,p.estado,p.nombre_promocion,p.descuento from articulos a
    join articulos_promociones ap on (a.id_articulo = ap.id_articulo)
    join promociones p on (p.id_promocion = ap.id_promocion)
    where a.id_articulo = ${idItems}`)
    let jsonResult = result.rows.map(row =>{
        return {
            idPromotions: row.id_promocion,
            percentage: row.porcentaje,
            state: row.estado,
            name: row.nombre_promocion,
            discount: row.descuento
        }
    })
    return jsonResult
}

async function setNewItem(args){
    try {
        const result = await pool.query(`
            insert into articulos (nombre_articulo,cantidad_articulo,precio,descripcion)
            values ('${args.name}',${args.quantity},${args.price},'${args.description}')
            RETURNING id_articulo;
        `);
        let jsonResult ={
            idItems: result.rows[0].id_articulo,
            name: args.name,
            quantity: args.quantity,
            description: args.description,
            price: args.price
        }
        return jsonResult;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getOneItem(idItem){
    try {
        const result = await pool.query(`select * from articulos where id_articulo = ${idItem}`);
        let jsonResult = result.rows.map(row =>{
            return {
                idItems: row.id_articulo,
                name: row.nombre_articulo,
                quantity: row.cantidad_articulo,
                description: row.descripcion,
                price: row.precio
            }
        })
        return jsonResult
    } catch (error) {
        console.error(error)
        return [];
    }
}

async function updateItem(item){
    try {
        const result = await pool.query(`update articulos 
        set nombre_articulo = '${item.name}', cantidad_articulo = ${item.quantity ? item.quantity : null}, precio = ${item.price}, descripcion = '${item.description ? item.description : null}'
        where id_articulo = ${item.idItem}`)
        let jsonResult = {
            idItems: item.idItem,
            name: item.name,
            quantity: item.quantity ? item.quantity : null,
            description: item.description ? item.description : null,
            price: item.price
        }
        return jsonResult
    } catch (error) {
        console.error(error)
        return [];
    }
}

async function validateEmail(email){
    try {
        const result = await pool.query(`select * from usuarios where email = '${email}'`)
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
        console.log(error)
        return [];
    }
}

module.exports = { getAllUser,
    getRol,validateUser,
    createNewUser,
    getAllItems,
    getPage,
    getPromotions,
    setNewItem,
    getOneItem,
    updateItem, 
    deleteUser,
    validateEmail };