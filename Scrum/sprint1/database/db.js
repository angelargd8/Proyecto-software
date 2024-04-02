const pool = require('./connection')

async function getAllUsers(){
    try{
        console.log("Iniciando la función getAllUsers");
        conn = await (await pool).getConnection();
        console.log("Conexión a la base de datos establecida");

        const result = await conn.execute(`select * from usuarios`);
        console.log("Consulta ejecutada correctamente. Resultados:");
        console.log(result.rows);   
        let jsonResult = result.rows.map(row => {
            return {
                id: row[0],
                role: row[1],
                username: row[2],
                password: row[3]
            };
        });
        return jsonResult;
    } catch (e) {
        console.log("Se produjo un error:");
        console.log(e);
        return e;
    }
}

async function getOneUser(username){
    
}

module.exports = {
    getAllUsers
}