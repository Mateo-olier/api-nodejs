"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producoController_1 = require("../controller/producoController");
class ProductoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:correo', producoController_1.productoController.lista);
        this.router.get('/:correo/:id', producoController_1.productoController.listarUno);
        this.router.get('/:correo', producoController_1.productoController.crear);
        this.router.delete('/:correo/id', producoController_1.productoController.eliminar);
        this.router.put('/:correo/id', producoController_1.productoController.actualizar);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
