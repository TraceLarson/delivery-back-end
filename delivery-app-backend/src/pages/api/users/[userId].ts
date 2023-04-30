import { NextApiRequest, NextApiResponse } from 'next';
import { ClientType } from '../../../util/types';
import { requestOptions } from '../../../util/DBConstants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  var raw = JSON.stringify({
    operation: 'sql',
    sql: `SELECT * FROM Users.Clients where RecordId = "${userId}"`,
  });

  fetch(`${process.env.BASEURL}`, requestOptions(raw))
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      const parsedResult: ClientType = JSON.parse(result);
      res.status(201).json(parsedResult);
    })
    .catch((error) => console.log('error', error));
}
