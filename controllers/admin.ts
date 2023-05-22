import { Request, Response } from "express";
import db from "../db/connections";
import Users from "../models/users/segusuario"
import {GenJWT} from "../helpers/jwt"
import { segusuario } from "../dto/users/users";
import jwt, { Secret, VerifyOptions } from 'jsonwebtoken';

const verificar = function (token:string) {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        process.env.SECRET_JWT as Secret,
        async function (err:any, decoded:Object) {
          if (err) {
            reject(err);
          }
          resolve(true);
        } as VerifyOptions
      );
    });
  };
export const login = async (req: Request, res: Response)=>{
    try{
        const {body} = req;
        const {username,password} = body;
        let user = await Users.findOne({where:{
            UsuarioLogin:username
        }})
        let token = await GenJWT({...user})
        // if(user?.UsuarioPassword == password){
        //     let token = "Token de Prueba"
        //     res.json({
        //         ok:true,
        //         message:'Logged',
        //         data:{
        //             token,
        //             user,
        //         }
        //     })
        // }else{
        //     res.status(400).json({
        //         ok:false,
        //         message:"Contraseña inválida",
        //         error:"Contraseña inválida"
        //     })
        // }
        res.json({
            ok:true,
            message:"User logged sucessfull",
            data:{
                user,
                token
            }
        })
    }catch(ex){
        res.status(400).json({
            ok:false,
            error:ex,
            message:'Login Fallido'
        })
    }
}