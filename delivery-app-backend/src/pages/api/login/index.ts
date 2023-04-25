import { NextApiRequest, NextApiResponse } from 'next';
import { UserLoginDataType } from '../../../../types';
import { requestOptions } from '../../../util/DBConstants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let loginData: UserLoginDataType = req.body;

  const raw = JSON.stringify({
    operation: 'sql',
    sql: `SELECT * FROM Users.Employees WHERE email = "${loginData.email}" and password = "${loginData.password}"`,
  });

  await fetch(`${process.env.BASEURL}`, requestOptions(raw))
    .then((response) => response.text())
    .then((result) => {
      const user = JSON.parse(result);
      console.log(user);
      res.status(200).json(user);
    })
    .catch((error) => {
      console.log('error', error);
      res.status(500).json({ error: error });
    });
}
