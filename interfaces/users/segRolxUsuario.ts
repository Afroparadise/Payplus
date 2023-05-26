export interface SegrolxusuarioGet{
    UsuarioId?:number,
    RolId?:number
}
export interface SegrolxusuarioCreate{
    UsuarioId:number,
    RolId:number,
    BitacoraUsuarioInserta:number,
    BitacoraUsuarioModifica:number
}
export interface SegrolxusuarioUpdate{
    UsuarioId:number,
    RolId:number,
    BitacoraUsuarioInserta?:number,
    BitacoraUsuarioModifica?:number
}