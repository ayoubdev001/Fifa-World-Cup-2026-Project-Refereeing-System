import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Affectation = sequelize.define("Affectation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  arbitreId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "arbitres",
      key: "id",
    },
  },
  matchId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "matchs",
      key: "id",
    },
  },
  role: {
    type: DataTypes.ENUM("central", "assistant", "VAR", "AVAR", "4th"),
    allowNull: false,
  },
}, {
  tableName: "affectations",
  timestamps: true,
  indexes: [

    { unique: true,
      fields: ["arbitreId", "matchId", "role"],    },

    {fields: ["arbitreId"],    },

    {fields: ["matchId"],},
    
  ],
});

export default Affectation;