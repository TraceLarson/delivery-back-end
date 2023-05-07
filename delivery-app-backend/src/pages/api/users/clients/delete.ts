import ServiceFactory from '@/service/ServiceFactory';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import { NextApiRequest, NextApiResponse } from 'next';
import ClientService from '../../../../service/ClientService';
import Client from '@/domain/implementation/Client';

const unitOfWork = new UnitOfWork();
const serviceFactory = new ServiceFactory();
const clientService = serviceFactory.CreateClientService(unitOfWork);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { clientRecordId } = req.body;
  const findResult = await clientService.FindByRecordId(clientRecordId);

  if (findResult.result == null) {
    res.status(404).json(JSON.parse(findResult.error || 'Client Not Found'));
    return;
  }

  const deleteResult = await clientService.RemoveClient<Client>(clientRecordId);
  res.status(deleteResult.status).json(deleteResult.result || deleteResult.error);
}
