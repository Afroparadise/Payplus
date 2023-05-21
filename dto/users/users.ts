export interface segusuario{
    SucursalId?:number,
    UsuarioApellido1:string,
    UsuarioApellido2:string,
    UsuarioNombre:string,
    UsuarioTelefono?:string,
    UsuarioCelular?:string,
    UsuarioDireccion?:string,
    UsuarioLogin:string,
    UsuarioPassword:string,
    UsuarioEmail?:string,
    UsuarioCambiaClave:number,
    UsuarioActivo:number,
    BitacoraUsuarioInserta:number,
    BitacoraFechaInsercion?:Date,
    BitacoraUsuarioModifica:number,
    BitacioraFechaModifica?:Date,
    UsuarioIdentificacion:string,
    UsuarioTipo?:number

}