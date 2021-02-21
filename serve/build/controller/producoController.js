"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoController = void 0;
const db_1 = __importDefault(require("../db"));
class ProductoController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo } = req.params;
            const producto = yield db_1.default.query(`SELECT * FROM producto WHERE usuario_email="${correo}"`);
            res.json(producto);
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const userOne = yield db_1.default.query(`SELECT * FROM producto WHERE id= ${id}`);
            if (userOne.length > 0) {
                return res.json(userOne[0]);
            }
            res.status(404).json({ "mensaje": "no existe" });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.query('INSERT INTO producto set ?', [req.body]);
                res.json({ "mensaje": "guardado" });
            }
            catch (error) {
                res.status(404).json({ "mensaje": "no se pudo guardar " });
            }
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                db_1.default.query(`DELETE FROM producto WHERE iduser= ${id}`);
                res.json({ "mensaje": "Eliminado" });
            }
            catch (error) {
                res.status(404).json({ "mensaje": "no se pudo eliminar " });
            }
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield db_1.default.query('UPDATE producto set? WHERE id = ?', [req.body, id]);
                res.json({ "mensaje": "actualizado" });
            }
            catch (error) {
                res.status(404).json({ "mensaje": "no se pudo actualizar " });
            }
        });
    }
}
exports.productoController = new ProductoController();
