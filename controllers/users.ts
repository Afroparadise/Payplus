import { Request, Response } from "express"
import Users from "../models/users/segusuario";
import { segusuario } from "../dto/users/users";

export const getUsers =async(req:Request, res:Response)=>{

    const users = await Users.findAll();

    res.json(users)
        
        
    

}
export const getUser = async (req:Request, res:Response)=>{
    const{ id } = req.params;
    try{
        const user = await Users.findByPk(id);
        if(user){
            res.json({
                msg:'getUser',
                data:user
            })
        }else{
            res.status(404).json({
                ok:false,
                data:null,
                message:"user not found",
            })
        }
    }catch(e){
        res.status(404).json({
            ok:false,
            message:'Not Found',
            error:e,
        })
    }
}
export const postUser =(req:Request, res:Response)=>{
    const { body } = req;
    let newUser : segusuario = body
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