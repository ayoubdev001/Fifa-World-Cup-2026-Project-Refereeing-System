import  sequelize from "./config/database.js";
import express from "express"
import "./models/index.js";

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log(" Server running...")
})

