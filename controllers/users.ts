import { Request, Response } from "express"
import Users from "../models/users/segusuario";
import { segusuario } from "../dto/users/users";
import segrolxusuario from '../models/users/segrolxusuario';
import segrol from "../models/users/segrol";

export const getUsers =async(req:Request, res:Response)=>{
    try{
        const users = await Users.findAll({
            include:[{all:true}],
        });
        const rolByUser = await segrolxusuario.findAll({include:[{all:true}]})
        // const rols = await segrol.findAll();
        res.json({
            ok:true,
            message:"Usuarios Obtenidos",
            data:{
                users
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            error:ex,
            message:"Usuarios no encontrados"
        })
    }
}
export const getUser = async (req:Request, res:Response)=>{
    const{ id } = req.params;
    try{
        const user = await Users.findByPk(id);
        if(user){
            res.json({
                ok:true,
                message:'getUser',
                data:{
                    user
                }
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
export const postUser = async (req:Request, res:Response)=>{
    const { body } = req;
    try{
        let newUser : segusuario = body
        const user = await Users.create({...newUser})
        res.json({
            msg:'postUser',
            data:{
                user
            },
        })
    }catch(ex){
        res.status(400).json({
            ok:false,
            error:ex
        })
    }
}
export const putUser =async (req:Request, res:Response)=>{
    const{ id } = req.params;
    const { body } = req;
    try{
        let newUser : segusuario = body
        const user = await Users.update(newUser,{where:{
            usuarioId:id
        }})
        res.json({
            ok:true,
            data:{
                user
            },
            msg:'Usuario Actualizado'
        })
    }catch(ex){
        res.status(400).json({
            ok:false,
            error:ex
        })
    }

}
export const deleteUser =(req:Request, res:Response)=>{
    const{ id } = req.params;
    res.json({
        msg:'deleteUser',
        id
    })

}