const { pool } = require("../utils/db");

async function getAllItems(idCategory) {
  const result = await pool.query(
    `SELECT * FROM articulos where id_categoria = ${idCategory}`
  );
  let jsonResult = result.rows.map((row) => {
    return {
      idItems: row.id_articulo,
      name: row.nombre_articulo,
      quantity: row.cantidad_articulo,
      price: row.precio,
      description: row.descripcion,
      image: row.category_image,
    };
  });
  return jsonResult;
}

async function getOneItem(idItem) {
  try {
    const result = await pool.query(
      `select * from articulos where id_articulo = ${idItem}`
    );
    let jsonResult = result.rows.map((row) => {
      return {
        idItems: row.id_articulo,
        name: row.nombre_articulo,
        quantity: row.cantidad_articulo,
        description: row.descripcion,
        price: row.precio,
      };
    });
    return jsonResult;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function updateItem(item) {
  try {
    const result = await pool.query(`update articulos 
        set nombre_articulo = '${item.name}', cantidad_articulo = ${
      item.quantity ? item.quantity : null
    }, precio = ${item.price}, descripcion = '${
      item.description ? item.description : null
    }'
        where id_articulo = ${item.idItem}`);
    let jsonResult = {
      idItems: item.idItem,
      name: item.name,
      quantity: item.quantity ? item.quantity : null,
      description: item.description ? item.description : null,
      price: item.price,
    };
    return jsonResult;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function addNewItem(req, res) {
  const name = req.body.name;
  const idCategory = req.body.idCategory;
  const description = req.body.description;
  const quantity = 0;
  const prices = JSON.parse(req.body.prices);
  const filePath = req.file.path;
  console.log(prices);

  try {
    await pool.query("BEGIN");

    const result = await pool.query(
      `
      INSERT INTO articulos (nombre_articulo, cantidad_articulo, descripcion, id_categoria, category_image)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id_articulo;
    `,
      [name, quantity, description, idCategory, filePath]
    );

    const idArticulo = result.rows[0].id_articulo;

    for (const price of prices) {
      const { nombre, cantidad, precio } = price;

      await pool.query(
        `
        INSERT INTO precios (id_articulo, nombre_precio, cantidad_precio, precio)
        VALUES ($1, $2, $3, $4);
      `,
        [idArticulo, nombre, cantidad, precio]
      );
    }

    await pool.query("COMMIT");
    res.status(200).json({
      status: true,
      message: "Insercion exitosa",
    });
    // return idArticulo;
  } catch (error) {
    await pool.query("ROLLBACK");
    res.status(400).json({
      status: false,
      message: "fallo en la insercion",
    });
    console.error("Error al insertar el artículo y los precios:", error);
  }
  return [];
}

async function getItemPrices(idItem) {
  try {
    const result = await pool.query(`
          select p.id_precio,p.nombre_precio, p.cantidad_precio, p.precio from articulos a
          inner join precios p on (a.id_articulo = p.id_articulo)
          where a.id_articulo = ${idItem}
    `);

    let jsonResult = result.rows.map((row) => {
      return {
        idPrice: row.id_precio,
        name: row.nombre_precio,
        quantity: row.cantidad_precio,
        price: row.precio,
      };
    });

    return jsonResult;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = {
  getAllItems,
  getOneItem,
  updateItem,
  addNewItem,
  getItemPrices,
};
