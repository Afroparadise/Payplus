export interface SegrolCreate{
    RolNombre:string;
    RolDescription?:string;
    BitacoraUsuarioInserta?:number;
    BitacoraFechaInsercion?:Date;
    BitacoraUsuarioModifica?:number;
    BitacoraFechaModifica?:Date;
}
export interface SegrolUpdate{
    RolId:number
    RolNombre?:string;
    RolDescription?:string;
    BitacoraUsuarioInserta?:number;
    BitacoraFechaInsercion?:Date;
    BitacoraUsuarioModifica?:number;
    BitacoraFechaModifica?:Date;
}
export interface SegrolGet{
    RolId?:number
}