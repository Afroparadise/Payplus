import express, {Application} from 'express';
import userRoutes from '../routes/users'
import cors from 'cors'
import db from '../db/connections';

class Server{
    
    private app:Application;
    private port: string 
    private apiPaths ={
        users: '/api/users'
    }


    constructor(){
        this.app =express();
        this.port =process.env.PORT || '8000';
        this.dbConnection()
        this.middelwares()
        this.routes();

    }

    async dbConnection(){
       try {
        
        await db.authenticate();
            console.log('Database online')
        
       } catch (error: any) {
            throw new Error(error);
        
       }
    }

    middelwares(){
        //CORS
        this.app.use( cors() );
        
        //lectura del body
        this.app.use( express.json())

        //carpeta publica
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use( this.apiPaths.users,userRoutes)
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en puerto ' + this.port);
        })
    }
}
export default Server;