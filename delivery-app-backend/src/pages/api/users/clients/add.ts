import { NextApiRequest, NextApiResponse } from 'next';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import ServiceFactory from '@/service/ServiceFactory';
import Client from '@/domain/implementation/Client';
import { ClientType } from '@/util/types';

const unitOfWork = new UnitOfWork();
const serviceFactory = new ServiceFactory();
const clientService = serviceFactory.CreateClientService(unitOfWork);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client: Client = await CreateClientObject(req.body);
  const response = await clientService.AddClient<Client>(client);

  console.log(`status: ${response.status} \r\n result: \r\n ${JSON.stringify(response.result || response.error)}`);
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
