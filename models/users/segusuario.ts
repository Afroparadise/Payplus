import { DataTypes } from 'sequelize';
import db from '../../db/connections';
import sucursal from '../sucursal/mntsucursal'

const segusuario = db.define('segusuario',{
    UsuarioId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    SucursalId: {
        type: DataTypes.INTEGER,
    },
    UsuarioApellido1: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    UsuarioApellido2: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    UsuarioNombre: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    UsuarioTelefono: {
        type: DataTypes.STRING,
    },
    UsuarioCelular: {
        type: DataTypes.STRING,
    },
    UsuarioDireccion: {
        type: DataTypes.STRING,
    },
    UsuarioLogin: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    UsuarioPassword: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    UsuarioEmail: {
        type: DataTypes.STRING
    },
    UsuarioCambiaClave: {
        type: DataTypes.TINYINT,
        allowNull:false,
    },
    UsuarioActivo: {
        type: DataTypes.TINYINT,
        allowNull:false,
    },
    BitacoraUsuarioInserta:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    BitacoraFechaInsercion:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    BitacoraUsuarioModifica:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    BitacoraFechaModifica:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    UsuarioIdentificacion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    UsuarioTipo:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
},{
    timestamps:false,
    tableName:'segusuario',
    
})
export default segusuario