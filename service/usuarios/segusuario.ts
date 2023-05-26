import { WhereOptions } from "sequelize";
import sequelize from "../../db/connections";
import { SegusuarioCreate, SegusuarioGet, SegusuarioUpdate } from "../../interfaces/users/segUsuario";
import segusuario from "../../models/users/segusuario";
import segrolxusuario from "../../models/users/segrolxusuario";
import Mntcaja from "../../models/caja/mntcaja";

export const getSegUsuariosS = async (segusuarioGet:SegusuarioGet)=>{
    try{
        let usuarios = await segusuario.findAll({
            where:{...segusuarioGet},
            include:[{all:true}]
        })
        await segrolxusuario.findAll();
        await Mntcaja.findAll()
        return usuarios
    }catch(ex){
        throw ex;
    }
}
export const addSegUsuarioS = async (segusuarioCreate : SegusuarioCreate)=>{
    try{
        return await segusuario.create({...segusuarioCreate});
    }catch(ex){
        throw ex
    }
}
export const updSegUsuarioS = async (segusuarioUpdate: SegusuarioUpdate)=>{
    try{
        return await segusuario.update({...segusuarioUpdate},{where:{UsuarioId:segusuarioUpdate.UsuarioId}});
    }catch(ex){
        throw ex
    }
}