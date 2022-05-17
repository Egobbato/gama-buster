const sequelize = require("sequelize");

const DB_name = "locadora";
const DB_user = "root";
const DB_pass = "priedu05";
const DB_config = {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
};

let db = {};

try {
  db = new sequelize(DB_name, DB_user, DB_pass, DB_config);
} catch (error) {
  console.error("Erro ao conectar o banco de dados", error.menssage);
}

const hasConnection = async () => {
  try {
    await db.authenticate();
    console.log("Banco de dados Conectado");
  } catch (error) {
    console.error("Falha ao conectar");
  }
};

Object.assign(db, { hasConnection });

module.exports = db;
