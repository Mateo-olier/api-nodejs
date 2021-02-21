import {Request, Response} from 'express';
import pool from '../db';

class ProductoController{
    public async lista (req: Request, res: Response){
        const {correo} = req.params;
        const producto = await pool.query(`SELECT * FROM producto WHERE usuario_email="${ correo }"`); 
        res.json(producto);
    }

 public async listarUno (req: Request, res: Response){
    const { id } = req.params;
    const userOne = await pool.query(`SELECT * FROM producto WHERE id= ${ id }`);
    if(userOne.length > 0){
        return res.json(userOne[0]);
    }
    res.status(404).json({"mensaje":"no existe"})
} 
    public async crear(req:Request, res:Response){
        try{
            await pool.query('INSERT INTO producto set ?', [req.body]);
            res.json({"mensaje":"guardado"});
        } catch (error) {
            res.status(404).json({"mensaje":"no se pudo guardar "})
        }
    }
    public async eliminar (req:Request,res:Response){
        try{
            const { id } = req.params;
            pool.query(`DELETE FROM producto WHERE iduser= ${ id }`);
            res.json({"mensaje":"Eliminado"})
        } catch (error) {
            res.status(404).json({"mensaje":"no se pudo eliminar "})
        }
    }
    public async actualizar (req:Request,res:Response){
        try{
            const { id } = req.params;
            await pool.query('UPDATE producto set? WHERE id = ?',[req.body, id]);
            res.json ({"mensaje":"actualizado"});
        } catch (error) {
        res.status(404).json({"mensaje":"no se pudo actualizar "})
    }
    }
    

}
export const productoController = new ProductoController();
