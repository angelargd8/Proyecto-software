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

// async function setCategory(name, idPage) {
//   try {
//     const result =
//       await pool.query(`insert into categorias (nombre_categoria, id_pagina)
//         values ('${name}', ${idPage}) returning id_categoria`);
//     let jsonResult = [
//       {
//         idCategory: result.rows[0].id_categoria,
//         name: name,
//         idPage: idPage,
//       },
//     ];
//     return jsonResult;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }

async function addNewCategory(req, res) {
  let categoryName = req.body.name;
  let idPage = req.body.idpage;
  let filePath = req.file.path;

  try {
    const result = await pool.query(`INSERT INTO categorias 
                      (nombre_categoria,imagen_categoria,id_pagina)
                      values ('${categoryName}','${filePath}',${idPage}) returning id_categoria`);

    if (result.rowCount > 0) {
      res.status(200).json({
        status: true,
        message: "Insercion exitosa",
        Category: {
          idCategory: result.rows[0].id_categoria,
          name: categoryName,
          imagen: filePath,
        },
      });
    } else {
      res.status(400).json({
        status: false,
        message: "fallo en la insercion",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: true,
      message: error,
      Category: {
        idCategory: result.rows[0].id_categoria,
        name: categoryName,
        imagen: filePath,
      },
    });
  }
  return [];
}

module.exports = {
  getCategories,
  getCategory,
  addNewCategory,
};
