import { DataTypes } from "sequelize";
import Sequelize from "../config/database";
import sequelize from "../config/database";

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("admin", "commissioner", "arbitrator", "consultation"),
        allowNull: "Users",
        timestamps: true,
    
    },

})

    export default User;
