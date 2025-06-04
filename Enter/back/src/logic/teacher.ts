import dal_sql from '../Dal/dal_sql';

const getAllTeachers = async () => {
  const sql = `
    SELECT  *  
      FROM users  
      WHERE role='teacher'
    `;
  const result = await dal_sql.execute(sql);
  return await result;
};

export { getAllTeachers };
