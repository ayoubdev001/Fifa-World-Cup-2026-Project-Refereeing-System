import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Arbitre = sequelize.define("Arbitre", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationalite: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confederation: {
    type: DataTypes.ENUM("UEFA", "CONMEBOL", "CAF", "AFC", "CONCACAF", "OFC"),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("Central", "Assistant", "Fourth", "VAR", "AVAR"),
    allowNull: false,
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  statut: {
    type: DataTypes.ENUM("active", "suspended", "injured", "retired"),
    allowNull: false,
    defaultValue: "active",
  },
}, {
  tableName: "arbitres",
  timestamps: true,
});

export default Arbitre;
