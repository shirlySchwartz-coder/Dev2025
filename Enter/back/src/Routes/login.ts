import e from 'express';
import express, { NextFunction, Request, Response } from 'express';

const loginRouter = express.Router();

export type userCred={
    username: string;
    password: string;
}

loginRouter.get('/', (req: Request, res: Response) => {
    res.send(`Login Route ${req.url} `);
});

export default loginRouter;