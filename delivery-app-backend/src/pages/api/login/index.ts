import Client from '@/domain/implementation/Client';
import Encryption from '@/util/Encryption';
import ServiceFactory from '../../../service/ServiceFactory';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import { NextApiRequest, NextApiResponse } from 'next';
import { UserLoginDataType } from '@/util/types';

const clientService = new ServiceFactory().CreateClientService(new UnitOfWork());
// const employeeService = new ServiceFactory().CreateEmployeeService(new UnitOfWork());
const encryption = Encryption.Singleton;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 console.log(`logging in`);
  const loginData: UserLoginDataType = req.body;
  if (!loginData) {
    res.status(500).json({ error: `no login data provided` });
    return;
  }

  const clients: Client[] = await clientService.FindAll<Client>().then((result) => {
      console.log(`found ${result.result?.length} clients`);
      return result.result
  }) ?? new Array<Client>;

  if (clients.length === 0) {
    res.status(500).json({ error: `found 0 clients` });
    return;
  }
  let foundClient: Client = clients.find((client) => client.email === loginData.email && encryption.comparePassword(client.password, loginData.password)) ?? new Client();

  res.status(200).json(foundClient);
}