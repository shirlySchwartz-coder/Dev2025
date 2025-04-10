import express, {NextFunction,Request,Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


import loginRouter from './Routes/login';
import studentRouter from './Routes/student';
import teacherRouter from './Routes/teacher';
import ErrorHandler from './MiddleWare/routeNotFound';


const server = express();
const port = 3000;

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



server.listen(3000, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});