import e, {Request,Response,NextFunction} from "express";
import { RouteNotFound } from "../Models/ClientsErrors";

const ErrorHandler = (req:Request,res:Response,next:NextFunction)=>{
    //res.status(404).send(`${req.originalUrl} Route not found`);
    const error = JSON.stringify(new RouteNotFound( `${req.originalUrl}`));
    console.log(error);
    next(error)
}

export default ErrorHandler;