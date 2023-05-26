import { SegrolxusuarioCreate, SegrolxusuarioGet, SegrolxusuarioUpdate } from "../../interfaces/users/segRolxUsuario";
import SegRolxUsuario from "../../models/users/segrolxusuario";

export const getSegRolxUsuarioS = async (segrolxusuarioGet: SegrolxusuarioGet)=>{
    try{
        const segRolxUsuario = await SegRolxUsuario.findAll({
            where:{...segrolxusuarioGet},
            include:[{all:true}]
        })
    }catch(ex){
        throw ex
    }
}
export const addSegRolxUsuarioS = async (segrolxusuarioCreate: SegrolxusuarioCreate)=>{
    try{
        const segRolxUsuario = await SegRolxUsuario.create({segrolxusuarioCreate})
    }catch(ex){
        throw ex
    }
}
export const updateSegRolxUsuarioS = async (segrolxusuarioUpdate: SegrolxusuarioUpdate)=>{
    try{
        const segRolxUsuario = await SegRolxUsuario.update({...segrolxusuarioUpdate},{
            where:{
                UsuarioId:segrolxusuarioUpdate.UsuarioId,
                RolId:segrolxusuarioUpdate.RolId
            }
        })
    }catch(ex){
        throw ex
    }
}