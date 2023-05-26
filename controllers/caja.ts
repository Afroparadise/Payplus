import { Request, Response } from "express";
import { getMntCajaS } from "../service/caja/mntcaja";
import { MntcajaGet } from "../interfaces/caja/mntcaja";


export const getMntCaja = async (req:Request,res:Response)=>{
    try{
        let mntcajaGet : MntcajaGet = req.body
        let cajas = await getMntCajaS(mntcajaGet);
        res.json({
            ok:true,
            message:"Cajas Obtenidas",
            data:{
                cajas
            }
        });
    }catch(ex){
        res.status(400).json({
            ok:false,
            message:ex
        })
    }
}

export const addMntCaja = async(req:Request,res:Response)=>{
    res.json({});
}