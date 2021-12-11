import pool from '../../config/database';

export default async function getAdoptions(req: any, res: any) {
  pool.getConnection((err: any, conn: any) => {
    conn.query(`SELECT * FROM notifications`, (err: any, results: any) => {
      if (err) return res.sendStatus(401);
      console.log(results);
      return res.send(results);
    });
    pool.releaseConnection(conn);
  });
}
