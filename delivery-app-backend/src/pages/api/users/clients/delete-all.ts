import ServiceFactory from '@/service/ServiceFactory';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import { NextApiRequest, NextApiResponse } from 'next';
import ClientService from '../../../../service/ClientService';
import Client from '@/domain/implementation/Client';
import { DeleteResultType } from '@/util/types';

const unitOfWork = new UnitOfWork();
const serviceFactory = new ServiceFactory();
const clientService = serviceFactory.CreateClientService(unitOfWork);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const foundClients = await clientService.FindAll<Client>();
  const clients: Client[] | null = foundClients.result;
  console.log(`Found ${clients?.length} clients`);

  if (clients == null || clients.length == 0) {
    res.status(404).json(JSON.parse(foundClients.error || 'No Clients Found'));
    return;
  }

  const deleteResults: Promise<DeleteResultType<Client>>[] = clients.map(async (client) => {
    console.log(`Deleting client ${JSON.stringify(client.RecordId)}`);
    return await clientService.RemoveClient<Client>(client.RecordId);
  });

  await Promise.all(deleteResults).then((results) => {
    const successfulResults = results.filter((result) => result.status >= 200 && result.status < 300);
    const failedResults = results.filter((result) => result.status >= 400);
    const successfulCount = successfulResults.length;
    const failedCount = failedResults.length;

    res.status(200).json({ successfulCount, failedCount, successfulResults, failedResults });
  });
}
