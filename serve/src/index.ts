import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
//routes
import indexRoutes from './routes/indexRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import productoRoutes from './routes/productoRoutes'
class Server{
   public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(){
        this.app.set('port', process.env.PORT || 3000 );
        this.app.use((morgan('dev')));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(){
        this.app.use('',indexRoutes);
        this.app.use('api/usuario',usuarioRoutes);
        this.app.use('/api/producto',productoRoutes)

    }
    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();