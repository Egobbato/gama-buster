const DataTypes = require("sequelize");
const db = require("../database");

const Cliente = db.define(
  "Cliente",
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
    sobrenome: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNulls: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
  },
  { tableName: "cliente", timestamps: false }
);

module.exports = Cliente;
