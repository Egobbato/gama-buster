const { DataTypes } = require("sequelize");

const db = require("../database");

const Reserva = db.define(
  "Reserva",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_reserva: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_limite_devolucao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cliente_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: "reserva", timestamps: false }
);

module.exports = Reserva;
