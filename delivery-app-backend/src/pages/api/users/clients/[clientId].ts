import Client from '@/domain/implementation/Client';
import IClientService from '@/service/interface/IClientService';
import IServiceFactory from '@/service/interface/IServiceFactory';
import IUnitOfWork from '@/service/interface/IUnitOfWork';
import ServiceFactory from '@/service/ServiceFactory';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import { NextApiRequest, NextApiResponse } from 'next';

const serviceFactory: IServiceFactory = new ServiceFactory();
const unitOfWork: IUnitOfWork = new UnitOfWork();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { clientId } = req.query;
  const clientService: IClientService = serviceFactory.CreateClientService(unitOfWork);

  const foundClients = await clientService.FindByRecordId<Client>(clientId as string).then((result) => {
    console.log(`Found ${result.result?.length} clients`);
    return result.result;
  });

  return res.status(201).json({ clients: foundClients });
}