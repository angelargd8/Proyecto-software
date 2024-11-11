const { pool } = require("../utils/db");

async function getCategories() {
  try {
    const result = await pool.query("select * from categorias");
    let jsonResult = result.rows.map((row) => {
      return {
        idCategory: row.id_categoria,
        name: row.nombre_categoria,
        idPage: row.id_pagina,
        image: row.imagen_categoria,
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
        image: row.imagen_categoria,
      };
    });
    return jsonResult;
  } catch (error) {
    console.error(error);
    return [];
  }
}

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

async function deleteCategory(idCategory) {
  try {
    // Verificamos si la categoría tiene productos asociados
    const productCheck = await pool.query(
      `SELECT * FROM articulos WHERE id_categoria = ${idCategory}`
    );

    if (productCheck.rowCount > 0) {
      return {
        status: false,
        message:
          "No se puede eliminar la categoría porque tiene productos asociados.",
      };
    }

    // Si no tiene productos asociados, procedemos a eliminar la categoría
    const result = await pool.query(
      `DELETE FROM categorias WHERE id_categoria = ${idCategory}`
    );

    console.log(result.rowCount);

    if (result.rowCount > 0) {
      return {
        status: true,
        message: "Categoría eliminada exitosamente.",
      };
    } else {
      return {
        status: false,
        message: "No se encontró la categoría para eliminar.",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: "Error al eliminar la categoría: " + error.message,
    };
  }
}

module.exports = {
  getCategories,
  getCategory,
  addNewCategory,
  deleteCategory,
};
