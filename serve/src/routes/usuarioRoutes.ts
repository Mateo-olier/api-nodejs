import { Router } from 'express';
import {usuarioController} from '../controller/usuarioController'

class UsuarioRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',usuarioController.crear)
    }
}
const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;