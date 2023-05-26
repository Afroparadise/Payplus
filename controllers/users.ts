import { Request, Response } from "express"
import Users from "../models/users/segusuario";
import { SegusuarioCreate, SegusuarioGet } from "../interfaces/users/segUsuario";
import segrolxusuario from '../models/users/segrolxusuario';
import segrol from "../models/users/segrol";
import { getSegUsuariosS } from "../service/usuarios/segusuario";
import { SegrolCreate, SegrolGet, SegrolUpdate } from "../interfaces/users/segRol";
import { sAddSegRol, sGetSegRol, sUpdateSegRol } from "../service/usuarios/segrol";

export const getSegUsuarios =async(req:Request, res:Response)=>{
    const usuario : SegusuarioGet = req.body
    try{
        const users = await getSegUsuariosS(usuario);
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
export const getSegUsuario = async (req:Request, res:Response)=>{
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
        let newUser : SegusuarioCreate = body
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
        let newUser : SegusuarioCreate = body
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

export const getRols = async(req:Request,res:Response)=>{
    const rol : SegrolGet = req.body
    try{
        let rols = await sGetSegRol(rol);
        res.json({
            ok:true,
            message:"Roles Obtenidos",
            data:{
                rols
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            message:ex
        })
    }
}

export const addRols = async(req:Request,res:Response)=>{
    const rol : SegrolCreate = req.body
    try{
        let rolAdded = await sAddSegRol(rol);
        res.status(201).json({
            ok:true,
            message:"Rol Creado",
            data:{
                rol:rolAdded
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            message:ex
        })
    }
}
export const updateRols = async(req:Request,res:Response)=>{
    const rol : SegrolUpdate = req.body
    try{
        let rolUpdated = await sUpdateSegRol(rol);
        res.status(201).json({
            ok:true,
            message:"Rol Actualizado",
            data:{
                rol:rolUpdated
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            message:ex
        })
    }
}