import { clerkClient, getAuth } from "@clerk/express";
import { get } from "mongoose";

// Protecting the Admin Routes
export const protectAdmin = async (req, res, next) => {
    try{
        const {userId} = getAuth(req);
        const user = await clerkClient.users.getUser(userId)
        if(user.privateMetadata.role !== 'admin') {
            return res.json({ user})
        }
        next();
    } catch (error){
         return res.json({success: false, message: "not authorized"})
    }
}