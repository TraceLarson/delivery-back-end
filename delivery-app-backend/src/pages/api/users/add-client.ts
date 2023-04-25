import Client from '../../../domain/implementation/Client';
import { NextApiRequest, NextApiResponse } from 'next';
import { ClientType } from '../../../../types';
import UnitOfWork from '@/service/UnitOfWork';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client: Client = await CreateClientObject(req.body);
  const response = await UnitOfWork.Singleton.AddClient(client);
  res.status(response.status).json(response.result || response.error);
}

async function CreateClientObject(client: ClientType): Promise<Client> {
  console.log(client);
  return await new Client(
    client.__createdtime__,
    client.__updatedtime__,
    client.password,
    client.state,
    client.city,
    client.lastName,
    client.zipCode,
    client.email,
    client.firstName,
    client.RecordId
  ).hashPassword();
}
