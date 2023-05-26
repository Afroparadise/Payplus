import { MntcajaCreate, MntcajaGet, MntcajaUpdate } from "../../interfaces/caja/mntcaja";
import Mntcaja from "../../models/caja/mntcaja";

export const getMntCajaS = async (mntcajaGet:MntcajaGet)=>{
    try{
        let cajas = await Mntcaja.findAll({
            where:{...mntcajaGet}
        });
        return cajas;
    }catch(ex){
        throw ex
    }
}

export const addMntCajaS = async (mntcajaCreate:MntcajaCreate)=>{
    try{
        let caja = await Mntcaja.create({...mntcajaCreate})
        return caja;
    }catch(ex){
        throw ex;
    }
}

export const updateMntCajaS = async (mntcajaUpdate:MntcajaUpdate)=>{
    try{
        let caja = await Mntcaja.update({...mntcajaUpdate},{where:{CajaId:mntcajaUpdate.CajaId}});
        return caja;
    }catch(ex){
        throw ex;
    }
}