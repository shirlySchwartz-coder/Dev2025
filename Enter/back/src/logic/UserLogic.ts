import { createJWT } from '../Utils/jwt';
import dal_mysql from '../Dal/dal_sql';
import { UserReg } from '../Models/UserReg';
import { ResultSetHeader } from 'mysql2';
import { UserCred } from '../Models/UserCred';

const bcrypt = require('bcrypt');
const saltRounds = 10;


const loginUser = async (data: any) => {
  console.log( 'user in logic:', data);
  const passEncrypt = await bcrypt.hash(data.password, saltRounds);
  console.log(passEncrypt)

  try {
    const sql = `
    SELECT  user_id, CONCAT_WS(" ", first_name , last_name) As userName, user_email , password,role
    FROM users
        WHERE user_email='${data.email}' ;
      `;
    console.log(sql)
    const [result] = await dal_mysql.execute(sql);
    console.log('result in logic:', result);

    if (result) {
      const userInfo = {
        userId: result.user_id,
        userName: result.userName,
        userEmail: result.user_email,
        role: result.role,
        jwt: createJWT(result),
      };
      return userInfo;
    } else {
      console.log(result);
      return 'user dose not exist';
    }
  } catch (err) {
    //userInfo = [];
    return err;
  }
};

const registerUser = async (user: UserReg) => {
  let userInfo;
  console.log(user);
  // check if the user already exists
  const sqlCheck = `
      SELECT user_id FROM users WHERE user_email='${user.userEmail}';
    `;
  const [resultCheck] = await dal_mysql.execute(sqlCheck);
  if (resultCheck) {
    return 'User already exists';
  } else {
    let userInfo: UserCred = {userId: user.id, userName: user.userFirstName, userEmail: user.userEmail, role :user.role };
    let passEncrypt = await bcrypt.hash(user.userPassword, saltRounds);
    console.log(passEncrypt)

    try {
      const sql = `
          INSERT INTO users
          Values 
          (DEFAULT, '${user.userFirstName}', '${user.userLastName}',
          '${user.userEmail}','${user.userPhone}','${passEncrypt}',
           '${user.role}');
      `;
      const result: ResultSetHeader = await dal_mysql.execute(sql);
      //console.log(`Created user with id:${result.insertId}`);
      user.id = +result.insertId;
    } catch (err) {
      return err;
    }

    return 'User was created';
  }
};
export { loginUser, registerUser };
