import { SegrolCreate, SegrolGet, SegrolUpdate } from "../../interfaces/users/segRol";
import segrol from "../../models/users/segrol";
import segrolxusuario from "../../models/users/segrolxusuario";

export const sGetSegRol = async (segrolGet:SegrolGet)=>{
    try{
        let rols = await segrol.findAll({
            where:{...segrolGet},
            include:[{all:true}]
        });
        await segrolxusuario.findAll()
        return rols;
    }catch(ex){
        throw ex;
    }
}
export const sAddSegRol = async (segrolCreate:SegrolCreate)=>{
    try{
        let rol = await segrol.create({...segrolCreate});
        return rol;
    }catch(ex){
        throw ex;
    }
}
export const sUpdateSegRol = async (segrolUpdate:SegrolUpdate)=>{
    try{
        let rol = await segrol.update({...segrolUpdate},{
            where:{RolId:segrolUpdate.RolId}
        });
        return rol;
    }catch(ex){
        throw ex;
    }
}