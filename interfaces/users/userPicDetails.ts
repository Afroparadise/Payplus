export interface UserpicdetailsGet{
    AutoID?:number,
    UserID?:number,
}
export interface UserpicdetailsCreate{
    UserImagename?:string,
    UserImagePath?:string,
    UserID?:number,
}
export interface UserpicdetailsUpdate{
    AutoID:number,
    UserImagename?:string,
    UserImagePath?:string,
    UserID?:number,
}