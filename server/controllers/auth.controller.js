
import { UserModel } from "../db/Schema.js";
import jwt from "jsonwebtoken"; 
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });

    }
    try {
        const user = await UserModel.findOne({
            username: username,
        })
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {})
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
        res.cookie("userId", user._id, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        })
        res.status(200).json({
            message: "login successful",
            user:{
                userId: user._id,
                username: user.username
            }
        })
        
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "backend server error" });
        
    }

}

export const register = async (req,res) =>{
    const {username,password} = req.body

    if(!username || !password){
        return res.status(400).json({message:"username and password are required"})
    }
    try {
        const existingUser = await UserModel.findOne({username: username});
        if(existingUser){
            return res.status(409).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            username: username,
            password: hashedPassword,
        })
        await newUser.save();

        res.status(201).json({message:"user registered successfully",newUser})
        
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "backend server error" });
        
    }
}

export const logout = (req,res)=>{
    res.clearCookie("token")
    res.clearCookie("userId")
    res.status(200).json({message: "logout successful"})
}