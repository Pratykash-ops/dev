import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.SQL_HOST,
    port: 3306,
    database: process.env.SQL_DB,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    timeout : 60*100*1.5
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    db.quit();
    return results;
  } catch (error) {
    return { error };
  }
}