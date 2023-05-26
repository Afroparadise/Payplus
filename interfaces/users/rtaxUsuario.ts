export interface RtaxusuarioCreate{
    RTA_idRTA:number,
    Usuario_idUsuario:number,
    fechaEntrada:Date,
    fechaSalida:Date,
    punch:number
}
export interface RtaxusuarioUpdate{
    RTA_idRTA:number,
    Usuario_idUsuario?:number,
    fechaEntrada?:Date,
    fechaSalida?:Date,
    punch?:number
}
export interface RtaxusuarioGet{
    RTA_idRTA?:number,
    Usuario_idUsuario?:number
}