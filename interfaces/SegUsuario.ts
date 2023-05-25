import { DataTypes } from "sequelize";

export interface SegUsuario{
    UsuarioId:number,
    SucursalId:number,
    UsuarioApellido1:string,
    UsuarioApellido2:string,
    UsuarioNombre:string,
    UsuarioTelefono:string,
    UsuarioCelular:string,
    UsuarioDireccion:DataTypes.StringDataType
}