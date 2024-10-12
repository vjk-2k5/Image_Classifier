import mongoose from "mongoose";
import { UserModel } from "../models/UserModel";
import { Request,Response } from "express";

export const addUser = async (req:Request, res:Response) : Promise<void> => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            res.status(400).json({
                success: false,
                message: "Please provide fullName, email, and password.",
            });
            return;
        }
        
        const user=new UserModel({
            fullName,
            email,
            password,
        });
        await user.save();
        res.status(201).json({
            success: true,
            message: "User added successfully",
            data: {
              fullName: user.fullName,
              email: user.email,
            },
          });
    }

    catch(error) {
        console.error('Error adding user:', error);
        res.status(500).json({
          success: false,
          message: "Server error: Unable to add user",
        });
    }
}
