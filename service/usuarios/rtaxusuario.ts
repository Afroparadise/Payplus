import { RtaxusuarioCreate, RtaxusuarioGet, RtaxusuarioUpdate } from "../../interfaces/users/rtaxUsuario";
import Rtaxusuario from "../../models/users/rtaxusuario";

export const getRtaxUsuarioS = async (rtaxusuarioGet:RtaxusuarioGet)=>{
    try{
        let rtausuario = await Rtaxusuario.findAll({
            where:{...rtaxusuarioGet},
            include:[{all:true}]
        })
        return rtausuario
    }catch(ex){
        throw ex;
    }
}
export const addRtaxUsuarioS = async (rtaxusuarioCreate:RtaxusuarioCreate)=>{
    try{
        const rtaUsuario = await Rtaxusuario.create({...rtaxusuarioCreate})
        return rtaUsuario;
    }catch(ex){
        throw ex;
    }
}
export const updateRtaxUsuarioS = async (rtaxusuarioUpdate:RtaxusuarioUpdate)=>{
    try{
        const rtaUsuario = await Rtaxusuario.update({...rtaxusuarioUpdate},{
            where:{
                RTA_idRTA:rtaxusuarioUpdate.RTA_idRTA,
                Usuario_idUsuario:rtaxusuarioUpdate.Usuario_idUsuario
            }
        });
        return rtaUsuario;
    }catch(ex){
        throw ex;
    }
}