import { Router } from "express";
import {getSegUsuarios, getSegUsuario, postUser, putUser, deleteUser} from '../controllers/users'

const router = Router();


router.get('/', getSegUsuarios );
router.get('/:id', getSegUsuario);
router.post('/',postUser);
router.put('/:id', putUser);
router.delete('/:id',deleteUser);






export default router;