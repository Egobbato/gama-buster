const DataTypes = require("sequelize");
const db = require("../database");

const genero = db.define(
  "Genero",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
  },
  { tableName: "Genero", timestamps: false }
);

module.exports = genero;
