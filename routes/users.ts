import { Router } from "express";
import {
    getSegUsuarios, 
    postUser, 
    putUser,
    getRols,
    getRtaxUsuario,
    getSegRolxUsuario,
    addRols,
    addRtaxUsuario,
    addSegRolxUsuario,
    updateRols,
    updateRtaxUsuario,
    updateSegRolxUsuario
} from '../controllers/users'

const router = Router();


router.post('/getsegusuario', getSegUsuarios );
router.post('/addsegusuario',postUser);
router.put('/updatesegusuario', putUser);

router.post('/getsegrol',getRols);
router.post('/addsegrol',addRols);
router.put('/updatesegrol',updateRols);

router.post('/getrtaxusuaro',getRtaxUsuario);
router.post('/addrtaxusuario',addRtaxUsuario);
router.put('/updatertaxusuario',updateRtaxUsuario);

router.post('/getsegrolxusaurio',getSegRolxUsuario);
router.post('/addsegrolxusaurio',addSegRolxUsuario);
router.put('/updatesegrolxusuario',updateSegRolxUsuario);






export default router;