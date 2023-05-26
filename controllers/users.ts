import { Request, Response } from "express"
import Users from "../models/users/segusuario";
import { SegusuarioCreate, SegusuarioGet, SegusuarioUpdate } from "../interfaces/users/segUsuario";
import segrolxusuario from '../models/users/segrolxusuario';
import segrol from "../models/users/segrol";
import { addSegUsuarioS, getSegUsuariosS, updSegUsuarioS } from "../service/usuarios/segusuario";
import { SegrolCreate, SegrolGet, SegrolUpdate } from "../interfaces/users/segRol";
import { sAddSegRol, sGetSegRol, sUpdateSegRol } from "../service/usuarios/segrol";
import { RtaxusuarioCreate, RtaxusuarioGet, RtaxusuarioUpdate } from "../interfaces/users/rtaxUsuario";
import { addRtaxUsuarioS, getRtaxUsuarioS, updateRtaxUsuarioS } from "../service/usuarios/rtaxusuario";
import { SegrolxusuarioCreate, SegrolxusuarioGet, SegrolxusuarioUpdate } from "../interfaces/users/segRolxUsuario";
import { addSegRolxUsuarioS, getSegRolxUsuarioS, updateSegRolxUsuarioS } from "../service/usuarios/segrolxusuario";

export const getSegUsuarios = async(req:Request, res:Response)=>{
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
export const postUser = async (req:Request, res:Response)=>{
    const { body } = req;
    try{
        let segusuarioCreate : SegusuarioCreate = body
        const user = await addSegUsuarioS(segusuarioCreate);
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
export const putUser = async (req:Request, res:Response)=>{
    try{
        const segusuarioUpdate: SegusuarioUpdate = req.body;
        const user = await updSegUsuarioS(segusuarioUpdate)
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

export const getRtaxUsuario = async(req:Request,res:Response)=>{
    const rtaxusuarioGet : RtaxusuarioGet = req.body
    try{
        let rtaxusaurios = await getRtaxUsuarioS(rtaxusuarioGet);
        res.json({
            ok:true,
            message:"Rta por usuario Obtenidos",
            data:{
                rols: rtaxusaurios
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            message:ex
        })
    }
}
export const addRtaxUsuario = async(req:Request,res:Response)=>{
    const rtaxusuarioCreate : RtaxusuarioCreate = req.body
    try{
        let rtaxusaurio = await addRtaxUsuarioS(rtaxusuarioCreate);
        res.status(201).json({
            ok:true,
            message:"Rta por usuario Creado",
            data:{
                rtaxusaurio
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            message:ex
        })
    }
}
export const updateRtaxUsuario = async(req:Request,res:Response)=>{
    const rtaxusuarioUpdate : RtaxusuarioUpdate = req.body
    try{
        let rtaxUsuario = await updateRtaxUsuarioS(rtaxusuarioUpdate);
        res.status(201).json({
            ok:true,
            message:"Rta por usuario Actualizado",
            data:{
                rtaxUsuario
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            message:ex
        })
    }
}

export const getSegRolxUsuario = async(req:Request,res:Response)=>{
    const segrolxusuarioGet : SegrolxusuarioGet = req.body
    try{
        let segrolxusuarios = await getSegRolxUsuarioS(segrolxusuarioGet);
        res.json({
            ok:true,
            message:"Rol por usuario Obtenidos",
            data:{
                segrolxusuarios
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            message:ex
        })
    }
}
export const addSegRolxUsuario = async(req:Request,res:Response)=>{
    const segrolxusuarioCreate : SegrolxusuarioCreate = req.body
    try{
        let segrolxusuario = await addSegRolxUsuarioS(segrolxusuarioCreate);
        res.status(201).json({
            ok:true,
            message:"Rol por usuario Creado",
            data:{
                rtaxusaurio: segrolxusuario
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            message:ex
        })
    }
}
export const updateSegRolxUsuario = async(req:Request,res:Response)=>{
    const segrolxusuarioUpdate : SegrolxusuarioUpdate = req.body
    try{
        let segrolxusuario = await updateSegRolxUsuarioS(segrolxusuarioUpdate);
        res.status(201).json({
            ok:true,
            message:"Rol por usuario Actualizado",
            data:{
                segrolxusuario
            }
        })
    }catch(ex){
        res.status(404).json({
            ok:false,
            message:ex
        })
    }
}