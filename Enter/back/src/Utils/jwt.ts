
import { UserCred } from '../Models/UserCred';

const jwt = require('jsonwebtoken');

const secretKey = 'the-secret-key-need-to-be-at-least-256-bytes';

//jwt => header,body,signature (secret key)
const createJWT = (user: UserCred) => {
  const payload = {
    userId: user.userId,
    userName: user.userName,
    userEmail:user.userEmail,
    role: user.role,
  };

  //for how long the token will be alive
  const options = { expiresIn: '30m' };

  const myJWT = jwt.sign(payload, secretKey, options);
  console.log('createJWT -jwt data:', payload);
  //console.log('jwt: ', 'Bearer ' + myJWT);
  return 'Bearer ' + myJWT;
};

const checkJWT = (token: string) => {
  try {
    const checkToken = token.split(' ')[1];
    const decoded = jwt.verify(checkToken, secretKey);
    console.log(decoded);
    return createJWT(new UserCred( 
      decoded.userId, decoded.userName,decoded.userEmail,decoded.role
     ));
  } catch (err: any) {
    console.log('error: ', err.name);
    return '';
  }
};

export { createJWT, checkJWT };
