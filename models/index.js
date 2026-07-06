import sequelize from "../config/database.js";
import Arbitre from "./arbitre.model.js";
import Match from "./match.model.js";
import Affectation from "./affectation.model.js";



Arbitre.hasMany(Affectation, { foreignKey: "arbitreId" });
Affectation.belongsTo(Arbitre, { foreignKey: "arbitreId" });



Match.hasMany(Affectation, { foreignKey: "matchId" });
Affectation.belongsTo(Match, { foreignKey: "matchId" });



Arbitre.belongsToMany(Match, {
  through: Affectation,
  foreignKey: "arbitreId",
  otherKey: "matchId",
});


Match.belongsToMany(Arbitre, {
  through: Affectation,
  foreignKey: "matchId",
  otherKey: "arbitreId",
});

const syncDatabase = async () => {
  try {
   await sequelize.sync({ force: true });
    console.log("All tables synced successfully!");
  } catch (error) {
    console.error("Sync failed:", error.message);
  }
};

syncDatabase();

export { sequelize, Arbitre, Match, Affectation };
