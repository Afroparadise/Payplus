import { Request, Response } from "express"
import Users from "../models/user";

export const getUsers =async(req:Request, res:Response)=>{

    const users = await Users.findAll();

    res.json(users)
        
        
    

}
export const getUser =(req:Request, res:Response)=>{
    const{ id } = req.params;
    res.json({
        msg:'getUser',
        id
    })

}
export const postUser =(req:Request, res:Response)=>{
    const { body } = req;
    res.json({
        msg:'postUser',
        body
        
    })

}
export const putUser =(req:Request, res:Response)=>{
    
    const{ id } = req.params;
    const { body } = req;
    res.json({
        msg:'putUser',
        body
        
    })

}
export const deleteUser =(req:Request, res:Response)=>{
    const{ id } = req.params;
    res.json({
        msg:'deleteUser',
        id
    })

}