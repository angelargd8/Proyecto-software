const { pool } = require("../utils/db");

async function getAllUsers() {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    let jsonResult = result.rows.map((row) => {
      return {
        email: row.email,
        name: row.nombre,
        lastName: row.apellido,
        password: row.password,
        IdRol: row.id_rol,
      };
    });
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
    let jsonResult = result.rows.map((row) => {
      return {
        ID: row.id_rol,
        name: row.nombre_rol,
      };
    });
    return jsonResult;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function validateUser(email, password) {
  try {
    const result = await pool.query(`
              select * from usuarios where email = '${email}' and password = '${password}'
          `);
    //console.log("AQ]UIIIII",result)
    let jsonResult = result.rows.map((row) => {
      return {
        email: row.email,
        name: row.nombre,
        lastName: row.apellido,
        password: row.password,
        IdRol: row.id_rol,
      };
    });
    return jsonResult;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function validateEmail(email) {
  try {
    const result = await pool.query(
      `select * from usuarios where email = '${email}'`
    );
    let jsonResult = result.rows.map((row) => {
      return {
        email: row.email,
        name: row.nombre,
        lastName: row.apellido,
        password: row.password,
        IdRol: row.id_rol,
      };
    });
    return jsonResult;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function createNewUser(args) {
  try {
    const result = await pool.query(`
              insert into usuarios (email,nombre,apellido,password,id_rol)
              values
                  ('${args.email}','${args.nombre}','${args.apellido}','${args.password}',2)
          `);
    //console.log("AQ]UIIIII",result)
    let jsonResult = {
      email: args.email,
      name: args.nombre,
      lastName: args.apellido,
      password: args.password,
      IdRol: 2,
    };
    return jsonResult;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function deleteUser(email) {
  const result = await pool.query(
    `DELETE FROM usuarios WHERE email = '${email}'`
  );
  return result;
}

async function getOneUserbyEmail(email) {
  const result = await pool.query(
    `SELECT * from usuarios where email = '${email}'`
  );
  let jsonResult = result.rows.map((user) => {
    return {
      email: user.email,
      name: user.nombre,
      lastName: user.apellido,
      password: user.password,
      IdRol: user.id_rol,
    };
  });

  return jsonResult[0];
}

async function modifyUser({ name, lastName, password, idRol, email }) {
  const result = await pool.query(
    `update usuarios set nombre = '${name}', apellido = '${lastName}', password = '${password}', id_rol = ${idRol} where email = '${email}' RETURNING *`
  );

  let jsonResult = result.rows.map((user) => {
    return {
      email: user.email,
      name: user.nombre,
      lastName: user.apellido,
      password: user.password,
      IdRol: user.id_rol,
    };
  });

  console.log(jsonResult);

  return jsonResult;
}

module.exports = {
  getAllUsers,
  getRol,
  validateUser,
  validateEmail,
  createNewUser,
  deleteUser,
  getOneUserbyEmail,
  modifyUser,
};
