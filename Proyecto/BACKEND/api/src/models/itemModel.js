const { pool } = require("../utils/db");

async function getAllItems() {
  const result = await pool.query("SELECT * FROM articulos");
  let jsonResult = result.rows.map((row) => {
    return {
      idItems: row.id_articulo,
      name: row.nombre_articulo,
      quantity: row.cantidad_articulo,
      price: row.precio,
      description: row.descripcion,
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

async function setNewItem(args) {
  try {
    const result = await pool.query(`
            insert into articulos (nombre_articulo,cantidad_articulo,precio,descripcion)
            values ('${args.name}',${args.quantity},${args.price},'${args.description}')
            RETURNING id_articulo;
        `);
    let jsonResult = {
      idItems: result.rows[0].id_articulo,
      name: args.name,
      quantity: args.quantity,
      description: args.description,
      price: args.price,
    };
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

module.exports = {
  getAllItems,
  getOneItem,
  setNewItem,
  updateItem,
};
