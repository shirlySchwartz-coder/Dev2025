import express, {NextFunction,Request,Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './Utils/config';


import loginRouter from './Routes/login';
import studentRouter from './Routes/student';
import teacherRouter from './Routes/teacher';
import ErrorHandler from './MiddleWare/routeNotFound';


const server = express();
const corsOptions = {
    origin: '*', //allow any origin
    methods: ['GET', 'POST', 'PUT'], //which methods i will allow
    allowedHeaders: ['Content-Type', 'Authorization'], //which headers i will get
    exposedHeaders: ['Authorization', 'Content-Type'], //which headers i will expose
  };

server.use(cors());

server.use(express.json());
//server.use(bodyParser.json({ type: 'application/*+json' }))


 server.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
}); 
server.use('/api/v1/login', loginRouter);
server.use('/api/v1/student', studentRouter);
server.use('/api/v1/teacher', teacherRouter);

server.use('*',ErrorHandler);



server.listen(config.webPort, () => {
    return console.log(`Express Server is listening on http://${config.webHost}:${config.webPort}`);
});