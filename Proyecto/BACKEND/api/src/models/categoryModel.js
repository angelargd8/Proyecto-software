const { pool } = require("../utils/db");

async function getCategories() {
  try {
    const result = await pool.query("select * from categorias");
    let jsonResult = result.rows.map((row) => {
      return {
        idCategory: row.id_categoria,
        name: row.nombre_categoria,
        idPage: row.id_pagina,
      };
    });
    return jsonResult;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getCategory(idCategory) {
  try {
    const result = await pool.query(
      `select * from categorias where id_categoria = ${idCategory}`
    );
    let jsonResult = result.rows.map((row) => {
      return {
        idCategory: row.id_categoria,
        name: row.nombre_categoria,
        idPage: row.id_pagina,
      };
    });
    return jsonResult;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function setCategory(name, idPage) {
  try {
    const result =
      await pool.query(`insert into categorias (nombre_categoria, id_pagina)
        values ('${name}', ${idPage}) returning id_categoria`);
    let jsonResult = [
      {
        idCategory: result.rows[0].id_categoria,
        name: name,
        idPage: idPage,
      },
    ];
    return jsonResult;
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = {
  getCategories,
  getCategory,
  setCategory,
};
