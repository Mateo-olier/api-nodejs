import {Request, Response} from 'express';
import pool from '../db';

class UsuarioController{
 /*    public async login(req:Request, res:Response){
        const {correo} = req.params;
        const producto = await pool.query(`SELECT * FROM usuario WHERE correo="${ correo }"`); 
        res.json(producto);
    } */
    public async crear(req:Request, res:Response){
        try{
            await pool.query('INSERT INTO usuario set ?', [req.body]);
            res.json({"mensaje":"guardado"});
        } catch (error) {
            res.status(404).json({"mensaje":"no se pudo guardar "})
        }
    }
}
export const usuarioController = new UsuarioController();
