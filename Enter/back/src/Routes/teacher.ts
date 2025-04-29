import express, { NextFunction, Request, Response } from 'express';
import { getAllTeachers } from '../logic/teacher';

const teacherRouter = express.Router();

teacherRouter.get(
    '/getAllTeachers',
    async (req: Request, res: Response,next:NextFunction) => {
   res
   .status(200)
   .json(await getAllTeachers());
});

export default teacherRouter;