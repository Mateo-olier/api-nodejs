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
        this.router.get('/', producoController_1.productoController.lista);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
