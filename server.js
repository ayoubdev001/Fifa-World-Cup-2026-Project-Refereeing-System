import express from "express"
import  sequelize from "./config/database.js";
import "./models/index.js";
import arbitreRoutes from "./routes/arbitre.routes.js";
import matchRoutes from "./routes/match.routes.js";
import affectationRoutes from "./routes/affectation.routes.js";
import logger from "./middlewares/logger.middleware.js";
import errorHandler from "./middlewares/error.middleware.js";




const app = express();
app.use(express.json());
app.use(logger);


app.use("/arbitres", arbitreRoutes);
app.use("/matchs", matchRoutes);
app.use("/affectations", affectationRoutes);

app.use(errorHandler);


const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected!");
  } catch (error) {
    console.error("Connection failed:", error.message);
  }
});
