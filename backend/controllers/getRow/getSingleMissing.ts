import pool from '../../config/database';

export default async function getAdoptions(req: any, res: any) {
  const id = req.params['id'];

  pool.getConnection((err: any, conn: any) => {
    conn.query(`SELECT * FROM notifications WHERE id= ${id} LIMIT 1`, (err: any, results: any) => {
      if (err) return res.sendStatus(401);
      console.log(results);
      return res.send(results);
    });
    pool.releaseConnection(conn);
  });
}
