import { Request, Response } from "express";
import md5 from 'md5'
import db from "../db/connections";
import Users from "../models/users/segusuario"
import {GenJWT} from "../helpers/jwt"
import { segusuario } from "../dto/users/users";
import jwt, { Secret, VerifyOptions } from 'jsonwebtoken';
import { DataTypes } from "sequelize";
import segrolxusuario from "../models/users/segrolxusuario";
import segrol from "../models/users/segrol";

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
        let user = await Users.findOne({
          where:{
            UsuarioLogin:username,
            UsuarioPassword:md5(password)
          },
          include:[{all:true}]
        }) 
        if(user){
          let userByRol = await segrolxusuario.findAll();
          let Rols = ""
          user?.dataValues.Rols.map((rol: any) => {
            Rols += rol.dataValues.RolNombre
          })
          let newUser = {
            ...user?.dataValues,
            Rols
          }
          let token = await GenJWT({...newUser})
          res.json({
              ok:true,
              message:"User logged sucessfull",
              data:{
                  user,
                  token
              }
          })
        }else{
          res.status(400).json({
            ok:false,
            message:"Usuario o contraseña inválido"
          })
        }
    }catch(ex){
        res.status(400).json({
            ok:false,
            error:ex,
            message:'Login Fallido'
        })
    }
}