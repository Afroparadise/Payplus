export interface MntcajaUpdate{
    CajaId:number,
    CajaDescription?:string,
    CajaFactura?:number,
    CajaActiva?:boolean,
    CajaMontoAlertaRetiro?:number,
    CajaMontoBloqueo?:number,
    BitacoraUsuarioInserta?:number,
    BitacoraUsuarioModifica?:number,
    SucursalId?:number,
    UsuarioId?:number,
}
export interface MntcajaCreate{
    CajaId:number,
    CajaDescription:string,
    CajaFactura:number,
    CajaActiva:boolean,
    CajaMontoAlertaRetiro:number,
    CajaMontoBloqueo:number,
    BitacoraUsuarioInserta?:number,
    BitacoraUsuarioModifica?:number,
    SucursalId:number,
    UsuarioId:number,
}
export interface MntcajaGet{
    CajaId?:number,
    CajaActiva?:boolean,
    SucursalId?:number,
    UsuarioId?:number,
}