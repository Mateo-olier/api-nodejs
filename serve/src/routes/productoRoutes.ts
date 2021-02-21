import { Router } from 'express';
import {productoController} from '../controller/producoController'

class ProductoRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/:correo',productoController.lista)
        this.router.get('/:correo/:id', productoController.listarUno)
        this.router.get('/:correo',productoController.crear)
        this.router.delete('/:correo/id', productoController.eliminar)
        this.router.put('/:correo/id',productoController.actualizar)
        
    }
}
const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;