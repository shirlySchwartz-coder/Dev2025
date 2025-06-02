import express, { NextFunction, Request, Response } from 'express';
import { loginUser, registerUser } from '../logic/UserLogic'
//import { UserReg } from '../Models/UserReg';
import { checkJWT, createJWT } from '../Utils/jwt';

const loginRouter = express.Router();



loginRouter.post(
    '/loginUser',
    async (request: Request, response: Response, nextFunction: NextFunction) => {
      //console.log(request.body);
      let result: any = await loginUser(request.body);
      //console.log(result);
      if (result.jwt !== undefined && result["jwt"].length>10) {
        //console.log(result)
        response
          .status(200)
          .header('Access-Control-Expose-Headers', 'Authorization')
          .header('Authorization', result.jwt)
          .json(result);
      } else {
        response.status(400).json({ msg: 'user not found' });
      }
    }
  );

  loginRouter.post(
    '/registerUser',
    async (request: Request, response: Response, nextFunction: NextFunction) => {
      console.log('registerUser request body:', request.body);

      let result: any = await registerUser(request.body);
      console.log(result)
  
      if (!result.errno) {
        response.status(201).json({ msg: 'created' });
      } else {
        response.status(400).json({ msg: result.sqlMessage });
      }
    }
  );

export default loginRouter;