import express from "express"
import  sequelize from "./config/database.js";
import "./models/index.js";
import arbitreRoutes from "./routes/arbitre.routes.js";
import matchRoutes from "./routes/match.routes.js";
import affectationRoutes from "./routes/affectation.routes.js";



const app = express();
app.use(express.json());
app.use("/arbitres", arbitreRoutes);
app.use("/matchs", matchRoutes);
app.use("/affectations", affectationRoutes);

app.listen(3000, () => {
    console.log(" Server running...")
})

