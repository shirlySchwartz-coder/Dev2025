import express, { NextFunction, Request, Response } from 'express';

const teacherRouter = express.Router();

teacherRouter.get('/', (req: Request, res: Response) => {
    res.send('teacher Router  Route');
});

export default teacherRouter;