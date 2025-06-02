import { error } from 'console';
import e, {Request,Response,NextFunction} from "express";
import { RouteNotFound } from "../Models/ClientsErrors";

const ErrorHandler = (
    error: Error, req:Request,res:Response,next:NextFunction)=>{
    
    const err = new RouteNotFound(req.originalUrl);
    
    next(err.message);
}

export default ErrorHandler;