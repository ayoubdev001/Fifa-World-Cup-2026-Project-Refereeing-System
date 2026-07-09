import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

export const register = async (req, res, next) => {
    try {
     const {nom, email, password, role } = req.body;

     const existingUser = await User.findOne({ where: {email } });
     if (existingUser) {
        return res.status(400).json({
            message: "Email already in use",
        });
     }
     const hashedPassword = await bcrypt.hash(password, 10);

     const user = await User.create({
        nom,
        email,
        password: hashedPassword,
        role,
     });
     return res.status(201).json({
        message: "User created successfully",
        data: {
            id: user.id,
            nom: user.nom,
            email: user.email,
            role: user.role,
        },
     });

    }catch (error) {
        next(error);
    }
};

