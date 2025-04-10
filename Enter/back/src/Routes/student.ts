import express, { NextFunction, Request, Response } from 'express';

const studentRouter = express.Router();

studentRouter.get('/', (req: Request, res: Response) => {
    res.send('student Router Route');
});


export default studentRouter;